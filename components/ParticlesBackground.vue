<template>
  <NuxtParticles id="tsparticles" :options="options" class="absolute -z-10" />
</template>

<script setup lang="ts">
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";

await loadSlim(tsParticles);
await loadEmittersPlugin(tsParticles);

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
          },
        },
      },
      size: { value: 75 },
      rotate: {
        value: { min: 0, max: 360 },
        animation: { enable: true, speed: 15, sync: true },
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
  fpsLimit: 60,
};
</script>
