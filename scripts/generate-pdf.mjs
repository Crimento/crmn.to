import { createServer } from "node:http";
import { createReadStream, existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";
import { spawn } from "node:child_process";

const root = resolve("dist");
const outputPath = resolve(root, "aleksandr-abramenko.pdf");

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".json", "application/json; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

const getFilePath = (urlPath) => {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0]);
  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(root, normalizedPath);

  if (filePath.endsWith(sep)) {
    filePath = join(filePath, "index.html");
  } else if (!extname(filePath)) {
    filePath = join(filePath, "index.html");
  }

  return filePath;
};

const server = createServer((request, response) => {
  const filePath = getFilePath(request.url || "/");

  if (!filePath.startsWith(root) || !existsSync(filePath)) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type":
      contentTypes.get(extname(filePath)) ||
      "application/octet-stream",
  });

  createReadStream(filePath).pipe(response);
});

const listen = () =>
  new Promise((resolveListen, rejectListen) => {
    server.once("error", rejectListen);
    server.listen(0, "127.0.0.1", () => {
      server.off("error", rejectListen);
      resolveListen(server.address());
    });
  });

const run = (command, args) =>
  new Promise((resolveRun, rejectRun) => {
    const child = spawn(command, args, {
      stdio: "inherit",
    });

    child.once("error", rejectRun);
    child.once("exit", (code) => {
      if (code === 0) {
        resolveRun();
        return;
      }

      rejectRun(new Error(`${command} exited with code ${code}`));
    });
  });

await mkdir(root, { recursive: true });

const address = await listen();
const pdfUrl = `http://127.0.0.1:${address.port}/pdf/`;

try {
  await run("chromium", [
    "--headless",
    "--no-sandbox",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--print-to-pdf-no-header",
    `--print-to-pdf=${outputPath}`,
    pdfUrl,
  ]);

  console.log(`Generated ${outputPath}`);
} finally {
  server.close();
}
