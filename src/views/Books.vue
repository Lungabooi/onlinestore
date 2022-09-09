<template>
  <div class="content">
    <div><input type="text" id="" v-model="search" placeholder="Search" class="w-100 my-5 justify-content-center"></div>
    <div class="filter">
      <button @click="sortByPrice">
      Sort by Price</button>



    </div>
    <div v-if="books">
      <BookCard class="card"
      v-for="book in books"
      :key="book.book_id"
      :book="book"/>
      
    </div>
   <div v-else class="spinner-border" role="status">
  <TheLoader />
</div>
</div>

  



</template>
<script>

import BookCard from "../components/BookCard.vue";
import TheLoader from "../components/TheLoader.vue";
export default {
  data() {
    return {
      search:'',
      content: false,
    }
  },
    computed: {
       books() {
      return this.$store.state.books;
    },
      sortByPrice() {
        return this.$store.state.books?.filter((books) => {
          let isMatch = true;
          if (!books.title?.toLowerCase().includes(this.search.toLowerCase())) 
              isMatch = false;
              if (this.category !== "all" && book.category !== this.category) isMatch = false;
              return isMatch;
          });
        },
      },

  mounted() {
    this.$store.dispatch("getBooks");
  },
  computed: {
    books() {
      return this.$store.state.books
    },
    computed: {
      filterdBooks: function(){
        return this.books.filter((book) =>{
          return book.title.match(this.search)
        })
      }
    }
  },
  components: { BookCard, TheLoader },
  mounted() {
    this.$store.dispatch("getBooks");
  },
};
</script>
<style scoped>
.container{
  height: 86vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin: auto;
  font-family: 'Times New Roman', Times, serif;
}
.search{
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
}

div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    align-content: center;
    align-items: stretch;
}

</style>