<template>
  <nav
    class="flex text-white items-center gap-20 absolute left-0 right-0 mx-6 py-4 top-4 bg-transparent border-b-2 border-neutral-400"
  >
    <RouterLink to="/" class="flex text-3xl items-center font-bold gap-2">
      <Icon icon="mingcute:movie-line" width="40" />
      <span>MoVue</span>
    </RouterLink>
    <ul class="flex items-center gap-4 font-semibold">
      <li>MoVues</li>
      <li>Favorite MoVues</li>
    </ul>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { RouterLink } from "vue-router";
</script>
