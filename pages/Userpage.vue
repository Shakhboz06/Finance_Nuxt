<template>
  <div class="user">
    <Header />
    <div class="wrapper">
      <div class="heading">
        <h1>Добро пожаловать, {{data.name}} {{data.secondName}}!</h1>
        <a href="mailto:alexadams@google.com">{{data.email}}</a>
      </div>
      <div class="wallets">
        <h3>Мои кошельки</h3>
        <div class="card">
          <div class="item">
            <h3>Visa</h3>
            <p>RUB</p>
          </div>
        </div>
        <router-link to="/walletpage">Смотреть все кошельки</router-link>
      </div>
      <div class="transactions">
        <h2>Последние транзакции</h2>
        <div class="container_transactions">
          <div class="heading_tran">
            <span>ID</span>
            <span>Отправлено с кошелька</span>
            <span class="category">Категория</span>
            <span>Сумма транзакции</span>
            <span>Дата транзакции</span>
          </div>
          <div class="transaction_info">
            <div class="item">
              <p>1232312</p>
              <p>VISA</p>
              <p>Автомобиль</p>
              <p>414,000,000</p>
              <p>4 дня назад</p>
            </div>
            <div class="item">
              <p>1232312</p>
              <p>VISA</p>
              <p>Автомобиль</p>
              <p>414,000,000</p>
              <p>4 дня назад</p>
            </div>
          </div>
        </div>
        <router-link to="/transactionPage">Смотреть все оплаты</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Userpage",
  data(){
    return{
      data: {}
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations(["PARSE_USER"]),
  },
  components: {
    Header,
  },
  created() {
    if (process.client) {
      this.data = JSON.parse(localStorage.user)
      this.PARSE_USER;
    }
  },
};
</script>

<style>
</style>