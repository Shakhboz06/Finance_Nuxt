<template>
  <div class="register">
    <form @submit="REGISTER()">
      <h1>Регистрация</h1>
      <input type="text" name="email" placeholder="Почта" />
      <input type="text" name="name" placeholder="Имя" />
      <input type="text" name="secondName" placeholder="Фамилия" />
      <input type="password" name="password" placeholder="Пароль" />
      <button>Продолжить</button>
      <nuxt-link to="/login" class="log_in">Войти в аккаунт</nuxt-link>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "Register",
  computed:{
  },
  methods:{
    ...mapActions(['REGISTER'])
  }
};
</script>

<style>
</style>