<template>
  
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/user">User</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/about">About</router-link> |
     <router-link to="/about">About</router-link>
    <button @click="logOut">Logout</button>
    
    
  
  </nav>
  <router-view/>
</template>

<script>
import { mapState } from 'vuex';
  import TheLoader from './components/TheLoader.vue';
  import Footer from './components/Footer.vue';

 

  export default{
    components:{
      TheLoader,
      Footer,
    },
    data() {
      return {
        loading: true,
      }
    },
    computed:{
      ...mapState({
        showLoading: state => state.showLoading
      })

      
    },
    methods:{
      logOut(){
        this.$store.commit("logOut")
      }
    }
  }
</script>

<style >
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;


}

nav a {
  font-weight: bold;
  color: #c36425;
}

nav a.router-link-exact-active {
  color: #191b1a;
}
</style>
