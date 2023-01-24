<template>
  <div>
    <AButton type="primary" @click="showModal" class="btn">{{ title }}</AButton>
    <AModal v-model:visible="visible" :title="title" @ok.prevent="handleOk">
      <template #footer>
        <AButton key="back" @click="handleCancel"> Cancel </AButton>
        <AButton
          :disabled="loading"
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
        >
          Submit
        </AButton>
      </template>
      <form v-if="!loading" class="input-container">
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
      </form>
      <div v-else class="spinner">
        <ASpin />
      </div>
      <ATypographyText v-if="errorMessage" type="danger">
        {{ errorMessage }}
      </ATypographyText>
    </AModal>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";

const userStore = useUserStore();

const { errorMessage, loading, user } = storeToRefs(userStore);
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

const clearUserCredentialsInput = () => {
  userCredentials.email = "";
  userCredentials.password = "";
  userCredentials.username = "";
  userStore.clearErrorMessage();
};

const handleOk = async (e) => {
  await userStore.handleSignup(userCredentials);
  if (user.value) {
    visible.value = false;
    clearUserCredentialsInput();
  }
};

const handleCancel = () => {
  clearUserCredentialsInput();
  visible.value = false;
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

.input-container {
  height: 120px;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
}
</style>
