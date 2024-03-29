<template>
  <div class="card w-64 bg-base-100/90 p-1 md:w-96">
    <img v-if="hoveredLink == 'none'" src="/images/a_default.svg" />
    <img v-if="hoveredLink == 'Home'" src="/images/a_smile.svg" />
    <img v-if="hoveredLink == 'About'" src="/images/a_fun.svg" />
    <img v-if="hoveredLink == 'CV'" src="/images/a_happy.svg" />
    <img v-if="hoveredLink == 'Github'" src="/images/a_shock.svg" />
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
