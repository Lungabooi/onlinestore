import { createStore } from 'vuex'
import router from '@/router';
export default createStore({
  state: {
    users: null,
    user: null,
    token: null,
    books: null,
    book: null
  },
  getters: {
  },
  mutations: {
    setUsers:(state, users) =>{
      state.users = users;
    },
    setUser:(state, user) =>{
      state.user = user;
    },
    setToken:(state, token) =>{
      state.token = token;
    },
    setBooks:(state, books) =>{
      state.books = books;
    },
    setBook:(state, book) =>{
      state.book = book;
    },

  },
  actions: { 
    login: async (context, payload) => {
      let res = await fetch("https://my-book-ap.herokuapp.com/users/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body:
        JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });
      let data = await res.json()
      console.log(data)
      if(data.token){
        context.commit('setToken', data.token)
        // Verify token
        //
        fetch('https://my-book-ap.herokuapp.com/users/verify', {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token
          }
        }).then((res) => res.json()).then((data) => {
          context.commit('setUser', data.user)
          router.push('/books')
        })
      }
      else {
        alert(data)
      }
    },
    register: async (context, data) => {
      console.log("working");
      const {
        full_name,
        password,
        phone_number,
        email,
        join_date,  
        user_type,     
        cart,
      } = data;
      fetch("https://my-book-ap.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          full_name: full_name,
          password: password,
          phone_number: phone_number,
          email: email,
          user_type: user_type,
          // cart: cart,          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          context.commit("setusers", json)
        });
      router.push("/login");
    },
    getUsers: async (context) => {
      fetch("https://my-book-ap.herokuapp.com/users")
        .then((response) => response.json())
        .then((users) => context.commit("setUsers", users));
    },
    getUser: async (context, id) => {
      fetch("https://my-book-ap.herokuapp.com/users/" +id)
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user[0]));
    },
    getBooks: async (context) => {
      fetch("https://my-book-ap.herokuapp.com/books/")
        .then((response) => response.json())
        .then((books) => context.commit("setBooks", books));
    },
    
  },
  modules: {
  }
})
