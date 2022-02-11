<template>
  <div id="home">
  </div>
</template>

<script>
import {style} from "../Styles/CSS/style.css"
export default {
  name: 'IndexPage',
  created(){
    this.$router.push({path: "/register"})
  }
}
</script>
