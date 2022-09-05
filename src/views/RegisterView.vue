<template>
 
  

  <div class="container">
    <form @submit.prevent="Register">
      <h3>Register:</h3>
       
      <input class="form-input" type="text" name="full_name" required v-model="full_name" placeholder="Full name" />
       <input class="form-input" type="text" name="password" required v-model="password" placeholder="Password" />
       <input class="form-input" type="text" name="phone_number" required v-model="phone_number" placeholder="Phone number" />
          <input class="form-input" type="text" name="email" required v-model="email" placeholder="Email" />
      <input class="form-input" type="date" name="join_date" required v-model="join_date" placeholder="Join Date" />
       <input class="form-input" type="text" name="user_type" required v-model="user_type" placeholder="User type" />
         <input class="form-input" type="number" name="cart" required v-model="cart" placeholder="cart" />
      <button @click="Register" class="form-btn" type="submit" value="Register">Submit</button> 
      <hr>
      <!-- <div class="form-extra">
        <router-link to="/register"><p>Register</p></router-link>
        <router-link to="/reset"><p>Reset-Psw</p></router-link>
      </div> -->
    </form>
    <!-- <div v-if="user">Welcome {{ user.full_name }}</div> -->
  </div>
  
</template>
<script>
export default {
     data() {
    return {
        full_name:"",
        phone_number:"",
        password: "",
        email: "",
        join_date:"",
        user_type:"",
        cart:"",
  
    };
  },
    
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
 
  methods: {
    Register() {
      this.$store.dispatch("register", {
        full_name: this.full_name,
        phone_number:this.phone_number,
        password: this.password,
        email: this.email,
        join_date:this.join_date,
        user_type: this.user_type,
        cart: this.cart,
        
      });
    },
  },
};
</script>
<style scoped>
.container{
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
form{
  box-shadow: 5px 5px 5px 5px lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  gap: 10px;
}
.form-input{
  width: 200px;
  border: none;
  border-radius: 5px;
  height: 30px;
}
.form-btn{
  width: 208px;
  border: none;
  border-radius: 5px;
  height: 30px;
}
.form-extra{
  display: flex;
  gap: 10px;
}
.form-extra p {
  width: 100px;
  border: none;
  border-radius: 5px;
  height: 30px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-extra a{
  text-decoration: none;
  color: black;
}
h3{
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
}
hr{
  width: 90%;
}
h3[data-v-03589122] {
    margin-top:20px;
    color: #050505;
    font-weight: bold;
    font-size: 1.4rem;
}
</style>