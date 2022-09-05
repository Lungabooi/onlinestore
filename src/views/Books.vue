<template>

  <div> <i class="bi bi-search"></i> <input
    class="search"  type="search" v-model="search" placeholder="Search  books"
  /></div>
    <div v-if="books" class="container">
  <BookCard class="card"
   v-for="book in books"
   :key="book.book_id"
   :book="book"/>
  </div>

</template>
<script>
import BookCard from "../components/BookCard.vue";
export default {
  mounted() {
    this.$store.dispatch("getBooks");
  },
  computed: {
    books() {
      return this.$store.state.books
    },
  },
  components: { BookCard },
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

</style>