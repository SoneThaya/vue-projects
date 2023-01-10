<template>
  <h1>Point Box</h1>
  <div class="buttons">
    <button @click="undoPoint">Undo Point</button>
    <button @click="redoPoint">Redo Point</button>
    <button @click="resetPoints">Reset Points</button>
  </div>
  <div class="point-box" @click="plotPoint">
    <div
      v-for="point in points"
      class="point"
      :style="{ top: `${point.y}%`, left: `${point.x}%` }"
    ></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const points = ref([]);
const deletedPoints = ref([]);

const plotPoint = (e) => {
  points.value.push({
    x: (e.offsetX / window.innerWidth) * 100,
    y: (e.offsetY / window.innerHeight) * 100,
  });
};

const undoPoint = () => {
  const deletedPoint = points.value.pop();
  deletedPoints.value.push(deletedPoint);
};

const redoPoint = () => {
  const reAddedPoint = deletedPoints.value.pop();
  points.value.push(reAddedPoint);
};

const resetPoints = () => {
  points.value = [];
  deletedPoints.value = [];
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.point-box {
  position: relative;
  height: 100vh;
  background-color: gray;
}

.point {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
}
</style>
