<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show === true"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue';
import  Footer from './components/Footer/index.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      msg:"abc"
    }
  },
  mounted(){
    this.$store.dispatch("categoryList");
  }
}
</script>

<style scoped>

</style>
