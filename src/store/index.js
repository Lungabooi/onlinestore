import { createStore } from 'vuex'
 import createPersistedState from "vuex-persistedstate";
import router from '@/router';
import { nextTick } from 'vue';

const api = "https://my-book-ap.herokuapp.com";
console.log(api);

export default createStore({
  state: {
    user: null,
    users: null,
    token: null,
    books: null,
    book: null,
    return :{
      showLoading: null,
    }
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
    logOut(state){
      state.user = null,
      state.token = null
    },
    setShowLoading(state){
      state.showLoading =showLoading;

    },
    sortBooksbyPrice: (state) => {
      state.books = state.programs.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.books.reverse();
      }
      state.asc = !state.asc;
    },
    sortBooksbyTitle: (state) => {
      state.books = state.programs.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.books.reverse();
      }
      state.asc = !state.asc;
    },

  },
  actions: { 
     getUser :async (context,token) => {
      fetch('https://my-book-ap.herokuapp.com/users/verify',{
        method:"GET",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${token}`
        }
      })
      .then((res) => res.json())
      .then((userdata) => {
        console.log(userdata);
        context.commit('setUser', userdata)
      })
    },
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
      })
      .then(res => res.json())
      .then(tokendata=>{
        console.log(tokendata.token);
        context.commit('setToken', tokendata.token),
        fetch('https://my-book-ap.herokuapp.com/users/users/verify',{
          method:"GET",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${tokendata.token}`
          }
        })
        .then((res) => res.json())
        .then((userdata) => {
          console.log(userdata);
          context.commit('setUser', userdata)
        });
        window.alert("Logged in")
        router.push('/books')
      });
      
   
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
      fetch("https://my-book-ap.herokuapp.com/users/" + id)
        .then((response) => response.json())
        .then((user) => context.commit("setUser", user[0]));
    },
    getBooks: async (context) => {
      fetch("https://my-book-ap.herokuapp.com/books/")
        .then((response) => response.json())
        .then((books) => context.commit("setBooks", books));
    },
    addBook: async (context, book) => {
      console.log(book);
      fetch("https://my-book-ap.herokuapp.com/books", {
        method: "POST",
        body: JSON.stringify(book),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((bookdata) => {
         console.log(bookdata);
          context.commit("setBooks")
        });
    },
    deleteBook: async (context, id) => {
      fetch(`${api}/books/${id}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => context.dispatch("getBooks"));
    },
    updateBook: async (context, payload) => {
      console.log("updating");
      const {
        book_id,
        title,
        author,
        publisher,
        category,
        price,  
        quantity,     
        imgURL,
      } = payload;
      fetch("https://my-book-ap.herokuapp.com/books/" + payload.id, {
        method: "PUT",
        body: JSON.stringify({
          book_id: book_id,
          title: title,
          author: author,
          publisher: publisher,
          category: category,
          price: price,
          quantity:quantity,
          imgURL: imgURL,
          // cart: cart,          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setBook", data)
        });
    },
    addUser: async (context, user) => {
      console.log(user);
      fetch("https://my-book-ap.herokuapp.com/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((Userdata) => {
         console.log(Userdata);
          context.commit("setUsers")
        });
    },
    deleteUser: async (context, Id) => {
      fetch(`${api}/users/${Id}`, {
        method: "DELETE",
      })
      .then((response) => response.json())
      .then(() => context.dispatch("getUser"));
    },
    updateUser: async (context, payload) => {
      console.log("updating");
      const {
        user_Id,
        full_name,
        password,
        phone_number,
        email,  
        join_date,     
        user_type,
      } = payload;
      fetch("https://my-book-ap.herokuapp.com/books/" + payload.Id, {
        method: "PUT",
        body: JSON.stringify({
          user_Id: user_Id,
          full_name: full_name,
          password: password,
          phone_number: phone_number,
          email: email,
          join_date:join_date,
          user_type: user_type,
          // cart: cart,          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setUser", data)
        });}
    
    
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
