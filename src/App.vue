<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Login">Login</router-link> |
    <router-link to="/Register">Register</router-link> |
    <router-link to="/User">User</router-link> |
    <button @click="Logout">LogOut</button>
  </nav>
  <router-view/>
</template>

<script>

  export default{
    methods:{
      Logout(){
        this.$store.commit("logOut")
      }
    }
  }
</script>

<style>
#app {
  font-family:'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #191b1a;
}
</style>
