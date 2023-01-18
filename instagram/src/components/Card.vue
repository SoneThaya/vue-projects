<template>
  <ACard hoverable style="width: 240px" class="card">
    <template #cover>
      <img alt="example" :src="post.url" />
    </template>
    <ACardMeta :title="post.username">
      <template #description>{{ post.caption }}</template>
    </ACardMeta>
  </ACard>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["post"]);
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
