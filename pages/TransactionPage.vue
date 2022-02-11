<template>
  <div class="TransactionPage">
    <Header />
    <div class="wrapper">
      <div class="heading">
        <h1>Мои транзакции</h1>
        <a href="mailto:alexadams@google.com">{{data.email}}</a>
      </div>
      <div class="transactions">
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
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "TransactionPage",
  data(){
    return{
      data:{}  
    }
  },
  components: {
    Header,
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