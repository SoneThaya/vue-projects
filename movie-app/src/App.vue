<template>
  <Navbar />
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>
