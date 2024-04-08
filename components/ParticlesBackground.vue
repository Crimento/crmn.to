<template>
  <div
    v-if="isLoading"
    class="absolute -z-20 flex size-full place-content-center place-items-center bg-black text-center"
  >
    <span class="text-9xl uppercase">Loading background...</span>
  </div>
  <NuxtParticles
    id="tsparticles"
    :options="options"
    class="absolute -z-10"
    @load="onLoad"
  />
</template>

<script setup lang="ts">
import type { Container } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadImageShape } from "@tsparticles/shape-image";
import { loadRotateUpdater } from "@tsparticles/updater-rotate";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadExternalRepulseInteraction } from "@tsparticles/interaction-external-repulse";

if (import.meta.client) {
  await loadBasic(tsParticles);
  await loadImageShape(tsParticles);
  await loadRotateUpdater(tsParticles);
  await loadEmittersPlugin(tsParticles);
  await loadExternalRepulseInteraction(tsParticles);
}

const isLoading = ref({});
isLoading.value = true;

const options = {
  background: { color: { value: "#000" } },
  particles: {
    color: { value: "#fff" },
    groups: {
      veryclose: { number: { value: 15 }, zIndex: { value: 75 } },
      close: { number: { value: 25 }, zIndex: { value: 50 } },
      far: { number: { value: 20 }, zIndex: { value: 25 } },
      veryfar: { number: { value: 20 }, zIndex: { value: 10 } },
    },
    move: {
      enable: true,
      angle: { offset: 0, value: 10 },
      direction: "right",
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 4,
    },
    number: {
      limit: { mode: "delete", value: 0 },
      value: 100,
    },
    shape: { close: true, fill: true, options: {}, type: "circle" },
    size: {
      value: 3,
    },
  },
  emitters: {
    rate: { quantity: 1, delay: 10 },
    particles: {
      move: {
        outModes: {
          left: "none",
          right: "destroy",
        },
        speed: 10,
        straight: true,
      },
      shape: {
        type: "images",
        options: {
          images: {
            src: "/images/amogus.svg",
            width: 128,
            height: 167,
          },
        },
      },
      size: { value: 65 },
      rotate: {
        value: { min: 0, max: 360 },
        animation: { enable: true, speed: 10, sync: true },
      },
    },
    position: { x: -5, y: 55 },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

const onLoad = (container: Container) => {
  isLoading.value = false;
};
</script>
