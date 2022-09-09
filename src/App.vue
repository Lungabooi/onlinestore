<template>
  
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/user">User</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/about">About</router-link> |
    <button @click="logout">LogOut</button>
    
    
  
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
      Logout(){
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
  background-color: rgb(214, 149, 149);
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: italic;
  border-radius: 30px;
}

nav a {
  font-weight: bold;
  color: #c36425;
}

nav a.router-link-exact-active {
  color: #191b1a;
}
</style>
