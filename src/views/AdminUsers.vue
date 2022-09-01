<template >
    <div>
        <h5> Users</h5>
        <table class="table table-hover table-dark" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full name</th>
      <th scope="col">email</th>
      <th scope="col">join_date</th>
      <th scope="col">user_type</th>
      <th scope="col">Add</th>
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
      <td><button type="button" class="btn btn-primary">add</button></td>
      <td><button type="button" class="btn btn-secondary">update</button></td>
      <td><button type="button" class="btn btn-danger">delete</button></td>
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
        }
    },
   
  mounted() {
    this.$store.dispatch("getUsers");
  }
    
}
</script>
<style >
    
</style>