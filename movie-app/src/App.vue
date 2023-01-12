<template>
  <AsyncBanner :banner="bannerMovie" />
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";

const AsyncBanner = defineAsyncComponent(() => {
  return import("./components/Banner.vue");
});

const movies = ref([]);
const bannerMovie = ref(null);

const getMovies = async () => {
  movies.value = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }`
  )
    .then((res) => res.json())
    .then((res) => res.results);
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

onMounted(async () => {
  await getMovies();
  bannerMovie.value = movies.value[getRandomInt(0, movies.value.length - 1)];
});
</script>
