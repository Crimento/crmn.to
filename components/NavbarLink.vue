<template>
  <NuxtLink
    :to="props.path"
    class="tab"
    :class="{ 'tab-active': currentRoute.path == props.path }"
    role="tab"
    >{{ props.title }}</NuxtLink
  >
</template>

<script setup lang="ts">
const router = useRouter();
const currentRoute = router.currentRoute;
const props = defineProps<{
  title?: string;
  path?: string;
}>();
</script>

<style scoped></style>
