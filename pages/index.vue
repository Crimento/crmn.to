<template>
  <div class="card w-64 bg-base-100/90 p-1 md:w-96">
    <img :src="imageLink" />
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

const imageLink = computed(() => {
  switch (props.hoveredLink) {
    case "none":
      return "/images/a_default.svg";
    case "Home":
      return "/images/a_smile.svg";
    case "About":
      return "/images/a_fun.svg";
    case "CV":
      return "/images/a_happy.svg";
    case "Github":
      return "/images/a_shock.svg";
    default:
      return "/images/a_dead.svg";
  }
});
</script>

<style scoped></style>
