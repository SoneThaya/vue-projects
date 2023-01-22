import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useUserStore = defineStore("users", () => {
  const user = ref(null);
  const errorMessage = ref("");

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {};

  const handleSignup = async (credentials) => {
    const { email, password, username } = credentials;

    if (password.length < 6) {
      return (errorMessage.value = "Password length is too short.");
    }

    if (username.length < 4) {
      return (errorMessage.value = "Username length is too short.");
    }

    if (!validateEmail(email)) {
      return (errorMessage.value = "Email is invalid.");
    }

    errorMessage.value = "";

    //validate if user exists

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return (errorMessage.value = error.message);
    }

    await supabase.from("users").insert({
      username,
      email,
    });
  };

  const handleLogout = () => {};

  const getUser = () => {};

  return {
    user,
    errorMessage,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
  };
});
