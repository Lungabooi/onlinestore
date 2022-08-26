<template>
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
  computed: {
    books() {
      return this.$store.state.books
    },
  },
  components: { BookCard },
  mounted() {
    this.$store.dispatch("getBooks");
  }
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

</style>