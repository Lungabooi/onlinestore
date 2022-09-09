<template >
    <div>
        <h5> Users</h5>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Add User</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Check Spelling</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form @submit.prevent="addUser(user.user_Id)">
      <div class="modal-body">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Full name </label>
            <input type="text" class="fullname" id="fullname" v-model="full_name">
             
          </div>
          
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Password </label>
            <input type="text" class="password" id="password" v-model="password">
</div>
<div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Phone number </label>
            <input type="text" class="password" id="password" v-model="phone_number">
</div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email </label>
            <input type="text" class="email" id="email" v-model="email">
            
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Join Date </label>
            <input type="date" class="join date" id="join date" v-model="join_date">
            
          </div>


          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">User type </label>
            <input type="text" class="usertype" id="usertype" v-model="user_type" >
          </div>
        
          
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          
          <button type="submit" class="btn btn-primary" >Submit</button>
        </div>
        
      </form>
      
    </div>
  </div>
</div>

        <table class="table table-hover table-dark" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full name</th>
      <th scope="col">email</th>
      <th scope="col">join_date</th>
      <th scope="col">user_type</th>
     <th scope="col">update</th>
     <th scope="col">delete</th>

    </tr>
  </thead>
  <tbody >
    <tr v-for="user in users" :key="user.user_id" :user="user" >
    <td>{{user.user_Id}}</td>
      <td>{{user.full_name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.join_date}}</td>
      <td>{{user.user_type}}</td> 
      <td><button type="button" class="btn btn-secondary"  @click="updateUser(user.user_Id)">update</button></td>
      <td><button type="button" class="btn btn-danger" @click="deleteUser(user.user_Id)">delete</button></td> 
    </tr>
   
  </tbody>
</table>
        
    </div>
</template>
<script>
export default {
   computed:{
        users(){
        return this.$store.state.users;
        },
        user(){
        return this.$store.state.user;
        }
    },
   
  mounted() {
    this.$store.dispatch("getUsers");
  },
  methods: {
    deleteUser(Id) {
      return this.$store.dispatch("deleteUser", Id);
    },
    addUser() {
      this.$store.dispatch("addUser", {
        full_name: this.full_name,
        password: this.password,
        phone_number: this.phone_number,
        email: this.email,
        join_date: this.join_date,
        user_type: this.user_type,
     
      })},
      updateUser(user_id) {
      this.$store.dispatch("updateUser",{
        id:user_id,
        full_name: this.full_name,
        password: this.password,
        phone_number: this.phone_number,
        email: this.email,
        join_date: this.join_date,
        user_type:this.user_type,
     
      })}
  
    },
    
}
</script>
<style scoped >
  tr:hover{
    color: yellow;

}
    
</style>