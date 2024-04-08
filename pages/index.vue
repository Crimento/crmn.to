<template>
  <div class="card w-64 bg-base-100/90 p-1 md:w-96">
    <div class="flex h-96 w-full place-content-center">
      <NuxtImg
        v-if="hoveredLink == 'none'"
        preload
        src="/images/a_default.svg"
      />
      <NuxtImg v-if="hoveredLink == 'Home'" preload src="/images/a_smile.svg" />
      <NuxtImg v-if="hoveredLink == 'About'" preload src="/images/a_fun.svg" />
      <NuxtImg v-if="hoveredLink == 'CV'" preload src="/images/a_happy.svg" />
      <NuxtImg
        v-if="hoveredLink == 'Github'"
        preload
        src="/images/a_shock.svg"
      />
    </div>
    <div class="card-body">
      <p class="text-center text-3xl">Hello, world!</p>
      <p class="text-lg">
        Alex a.k.a crimento here. IT, webdev and gaming enthusiast. Check the
        links above to learn more about me.
      </p>
      <a
        class="link link-warning mt-5 text-center"
        href="https://u24.gov.ua/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ukraine needs our support!
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "crmn.to - Home",
  meta: [{ name: "description", content: "crmn.to main page" }],
});

const props = defineProps({
  hoveredLink: {
    type: String,
    default: "none",
  },
});
</script>

<style scoped></style>
