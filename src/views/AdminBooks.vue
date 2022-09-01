<template >
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
        books(){
        return this.$store.state.books;
        }
    },
   
  mounted() {
    this.$store.dispatch("getBooks");
  }
    
}
</script>
<style >
    
</style>