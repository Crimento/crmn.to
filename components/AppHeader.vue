<template>
  <div class="navbar bg-base-300">
    <div class="navbar-start" />
    <div class="navbar-center">
      <div role="tablist" class="tabs tabs-bordered">
        <NavbarLink
          path="/"
          title="Home"
          @mouseover="emit('hoverLinkChange', 'Home')"
          @mouseleave="emit('hoverLinkChange', 'none')"
        ></NavbarLink>
        <NavbarLink
          path="/about"
          title="About me"
          @mouseover="emit('hoverLinkChange', 'About')"
          @mouseleave="emit('hoverLinkChange', 'none')"
        ></NavbarLink>
        <NavbarLink
          path="/cv"
          title="Resume"
          @mouseover="emit('hoverLinkChange', 'CV')"
          @mouseleave="emit('hoverLinkChange', 'none')"
        ></NavbarLink>
        <NavbarLink
          path="https://github.com/crimento"
          title="My Github"
          @mouseover="emit('hoverLinkChange', 'Github')"
          @mouseleave="emit('hoverLinkChange', 'none')"
        ></NavbarLink>
      </div>
    </div>
    <div class="navbar-end" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: "hoverLinkChange", link: string): void;
}>();
</script>

<style scoped></style>
