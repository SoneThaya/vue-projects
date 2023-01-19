<template>
  <Container>
    <div class="profile-container">
      <UserBar
        username="laithharb"
        :userInfo="{
          posts: 4,
          followers: 100,
          following: 323,
        }"
      />
      <ImageGallery
        :posts="[
          {
            id: 1,
            image:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          },
          {
            id: 2,
            image:
              'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          },
        ]"
      />
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import ImageGallery from "./ImageGallery.vue";
import UserBar from "./UserBar.vue";
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}
</style>
