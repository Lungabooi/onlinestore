<template >
    <div>
        <h1>Admin page</h1>
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


<div>
<h5>Books</h5>
        <table class="table table-hover table-dark" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">author</th>
      <th scope="col">publisher</th>
      <th scope="col">category</th>
    </tr>
  </thead>
  <tbody >
    <tr v-for="book in books" :key="book.book_id" :book="book" >
    <td>{{book.book_id}}</td>
      <td>{{book.title}}</td>
      <td>{{book.author}}</td>
      <td>{{book.publisher}}</td>
      <td>{{book.category}}</td> 
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
  },
    computed:{
        books(){
        return this.$store.state.books;
        }
    },
   
  mounted() {
    this.$store.dispatch("getBooks");
  }
};
</script>
<style scoped>
h5{
    margin-top: 30px;

}

tr:hover{
    color: yellow;

}

    
</style>