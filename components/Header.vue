<template>
  <div class="header">
    <div class="links">
      <div class="left_side">
        <nuxt-link to="/userpage">Главная</nuxt-link>
        <nuxt-link to="/walletPage">Мои кошелки</nuxt-link>
        <nuxt-link to="/transactionPage">Мои транзакции</nuxt-link>
      </div>
      <div class="right_side">
        <a href="mailto:alex.gmail.com">{{data.email}}</a>
        <!-- <router-link to="/login"> -->
        <img src="../images/icons/logout.svg" @click="LOG_OUT()"/>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters,mapActions} from "vuex";
export default {
  name: "Header",
  data(){
    return{
      data: {}
    }
  },
  methods: {
    ...mapActions(['LOG_OUT'])
  },
  created(){
    if (process.client) {
      this.data = JSON.parse(localStorage.user)
    }
  }
};
</script>

<style>
</style>