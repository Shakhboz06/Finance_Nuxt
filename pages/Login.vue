<template>
  <div class="log_in">
    <form @submit.prevent="LOGIN()">
      <h1>Войти в аккаунт</h1>
      <input type="text" name="email" placeholder="Почта" />
      <input type="password" name="password" placeholder="Пароль" />
      <button>Продолжить</button>
      <nuxt-link to="/register" class="register">Регистрация</nuxt-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  methods: {
    ...mapActions(["LOGIN"]),
  },
};
</script>

<style>
</style>