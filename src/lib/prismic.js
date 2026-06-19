const PRISMIC_API_URL = "https://crimento.cdn.prismic.io/api/v2";

const fetchJson = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Prismic request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
};

const fetchRepository = () => fetchJson(PRISMIC_API_URL);

const getMasterRef = (repository) => {
  const masterRef = repository.refs.find((ref) => ref.isMasterRef)?.ref;

  if (!masterRef) {
    throw new Error("Prismic repository does not expose a master ref.");
  }

  return masterRef;
};

export const fetchPrismicDocuments = async (type, { pageSize = 100 } = {}) => {
  const repository = await fetchRepository();
  const searchUrl = new URL(repository.forms.everything.action);

  searchUrl.searchParams.set("ref", getMasterRef(repository));
  searchUrl.searchParams.set("q", `[[at(document.type,"${type}")]]`);
  searchUrl.searchParams.set("pageSize", String(pageSize));

  const response = await fetchJson(searchUrl);

  return response.results || [];
};

export const fetchPrismicSingleton = async (type) => {
  const documents = await fetchPrismicDocuments(type, { pageSize: 1 });

  return documents[0] || null;
};

export const getRichTextValue = (field) =>
  Array.isArray(field) ?
    field
      .map((block) => block?.text)
      .filter(Boolean)
      .join(" ")
  : "";

export const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const getRichTextBlockHtml = (block) => {
  const text = block?.text || "";
  const strongSpans = (block?.spans || [])
    .filter((span) => span.type === "strong")
    .sort((a, b) => a.start - b.start);

  if (strongSpans.length === 0) {
    return escapeHtml(text);
  }

  const segments = [];
  let cursor = 0;

  for (const span of strongSpans) {
    if (span.start > cursor) {
      segments.push(escapeHtml(text.slice(cursor, span.start)));
    }

    segments.push(
      `<strong class="text-base-content font-semibold">${escapeHtml(
        text.slice(span.start, span.end),
      )}</strong>`,
    );

    cursor = span.end;
  }

  if (cursor < text.length) {
    segments.push(escapeHtml(text.slice(cursor)));
  }

  return segments.join("");
};

export const getRichTextHtml = (field) => {
  if (!Array.isArray(field)) return "";

  const html = [];
  let listType = null;

  const closeList = () => {
    if (!listType) return;

    html.push(listType === "ordered" ? "</ol>" : "</ul>");
    listType = null;
  };

  for (const block of field) {
    if (block?.type === "list-item" || block?.type === "o-list-item") {
      const nextListType = block.type === "o-list-item" ? "ordered" : "bullet";

      if (listType !== nextListType) {
        closeList();
        html.push(
          nextListType === "ordered" ?
            '<ol class="text-base-content/90 ml-5 list-decimal space-y-1 leading-relaxed">'
          : '<ul class="text-base-content/90 ml-5 list-disc space-y-1 leading-relaxed">',
        );
        listType = nextListType;
      }

      html.push(`<li>${getRichTextBlockHtml(block)}</li>`);
      continue;
    }

    closeList();

    if (block?.type === "heading1") {
      html.push(
        `<h2 class="text-xl font-semibold">${getRichTextBlockHtml(block)}</h2>`,
      );
    } else if (block?.type === "heading2" || block?.type === "heading3") {
      html.push(
        `<h3 class="text-lg font-semibold">${getRichTextBlockHtml(block)}</h3>`,
      );
    } else {
      html.push(
        `<p class="text-base-content/90 leading-relaxed">${getRichTextBlockHtml(
          block,
        )}</p>`,
      );
    }
  }

  closeList();

  return html.join("");
};
