<template >
    
        <h5>Books</h5>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Add Book</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Check Spelling</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form @submit.prevent="addbook(user.user_Id)">
      <div class="modal-body">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title </label>
            <input type="text" class="title" id="title" v-model="title">
             
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Author </label>
            <input type="text" class="author" id="author" v-model="author">
            
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Publisher </label>
            <input type="text" class="publisher" id="publisher" v-model="publisher">
            
          </div>


          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Category </label>
            <input type="text" class="category" id="category" v-model="category" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Quantity </label>
            <input type="text" class="category" id="category" v-model="quantity" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Image </label>
            <input type="text" class="category" id="category" v-model="imgURL" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Price </label>
            <input type="text" class="price" id="price" v-model="price">
            
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
      <th scope="col">title</th>
      <th scope="col">author</th>
      <th scope="col">publisher</th>
      <th scope="col">category</th>
      <th scope="col">price</th>
      <th scope="col">image</th>
      <th scope="col">Delete</th>

      
    </tr>
  </thead>
  <tbody >
    <tr v-for="book in books" :key="book.book_id" :book="book" >
    <td>{{book.book_id}}</td>
      <td>{{book.title}}</td>
      <td>{{book.author}}</td>
      <td>{{book.publisher}}</td>
      <td>{{book.category}}</td> 
      <td>R{{book.price}}</td> 
      <td><img :src="book.imgURL" /></td>
      <td><button type="button" class="btn btn-danger" @click="deleteBook(book.book_id)">delete</button></td> 
      <td> <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Update</button>

<!-- Modal -->
<div class="modal fade" id="update" tabindex="-1" aria-labelledby="update" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="update">Check Spelling</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form @submit.prevent="updatebook(user.user_Id)">
      <div class="modal-body">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title </label>
            <input type="text" class="title" id="title" v-model="title">
             
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Author </label>
            <input type="text" class="author" id="author" v-model="author">
            
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Publisher </label>
            <input type="text" class="publisher" id="publisher" v-model="publisher">
            
          </div>


          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Category </label>
            <input type="text" class="category" id="category" v-model="category" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Quantity </label>
            <input type="text" class="category" id="category" v-model="quantity" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Image </label>
            <input type="text" class="category" id="category" v-model="imgURL" >
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Price </label>
            <input type="text" class="price" id="price" v-model="price">
            
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
</div></td>
      
    </tr>
   
  </tbody>
</table>
   
</template>
<script>
export default {
  data(){
  return{
   title:"",
   author:"",
   publisher:"",
   category:"",
   quantity:"",
   price:"",
   imgURL:"",

  }
  },
    computed:{
        books(){
        return this.$store.state.books;
        },
       
    },
   
  mounted() {
    this.$store.dispatch("getBooks");
  },
  methods: {
    addbook() {
      this.$store.dispatch("addBook", {
        title: this.title,
        author: this.author,
        publisher: this.publisher,
        category: this.category,
        price: this.price,
        quantity:this.quantity,
        imgURL:this.imgURL
     
      });
       
    },
    deleteBook(id) {
      return this.$store.dispatch("deleteBook", id);
    },
    
    updateBook(id) {
      return this.$store.dispatch("updateBook", id);
    },
  },
 
    
}
</script>
<style scoped >
  btn-primary {
    color: #fff;
    background-color: #fd750d;
    border-color: #0d6efd;
    margin-bottom: 10px;
}
table{
  margin-top: 20px;
}

img, svg {
    vertical-align: middle;
    height: 70px;
}


</style>