<template>
  <div>
    <AButton type="primary" @click="showModal" class="btn">{{ title }}</AButton>
    <AModal v-model:visible="visible" :title="title" @ok="handleOk">
      <AInput
        class="input"
        v-if="!isLogin"
        v-model:value="userCredentials.username"
        placeholder="Username"
      />
      <AInput
        class="input"
        v-model:value="userCredentials.email"
        placeholder="Email"
      />
      <AInput
        class="input"
        v-model:value="userCredentials.password"
        placeholder="Password"
        type="password"
      />
      <ATypographyText v-if="errorMessage" type="danger">
        {{ errorMessage }}
      </ATypographyText>
    </AModal>
  </div>
</template>

<script setup>
import { ref, defineProps, reactive } from "vue";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { errorMessage } = storeToRefs(userStore);
const props = defineProps(["isLogin"]);
const visible = ref(false);

const userCredentials = reactive({
  email: "",
  password: "",
  username: "",
});

const showModal = () => {
  visible.value = true;
};

const handleOk = (e) => {
  userStore.handleSignup(userCredentials);
};

const title = props.isLogin ? "Login" : "Signup";
</script>

<style scoped>
.btn {
  margin-left: 10px;
}

.input {
  margin-top: 5px;
}
</style>
