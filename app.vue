<template>
  <div class="flex min-h-screen w-screen flex-col bg-transparent font-mono">
    <AppHeader @hover-link-change="changeHoveredLink" />
    <div class="flex flex-1 flex-col place-content-center place-items-center">
      <ParticlesBackground />
      <NuxtPage :hovered-link="hoveredLink" />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const hoveredLink = ref({});
hoveredLink.value = "none";

const changeHoveredLink = (link: string) => {
  hoveredLink.value = link;
};
</script>

<style scoped></style>
