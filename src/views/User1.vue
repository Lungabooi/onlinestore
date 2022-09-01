<template >
    <div>
              <!-- <figure>

  <figcaption v-for="user in user"
   :key="user.user_id"
   :user="user" >
    <div class="fig-author-figure-title">{{user.full_name}} </div>
    <div class="fig-author-figure-title"> {{user.contact}}</div>
    <div class="fig-author-figure-title">{{user.user_Id}} &#8212; 5m read</div>
  </figcaption>
    <  /figure> -->

    <!-- <div v-for="user of users" :key="user.user_Id" :user="user">
        <p>{{user.full_name}}</p>
    </div> -->

        <div v-if="user">
    <h2>User Profile</h2>

        <p>{{user.full_name}}</p>
    </div>
    </div>
</template>



<script>
export default {
    // props: ["user.user_Id"],
    //   mounted() {
    //     // this.$store.dispatch("getUser");
    //     console.log(this.User);
    //   },
  computed: {
 user(){
    return this.$store.state.user
 }
  },
};
</script>



<style scoped>
    :root {
  --fir-font-article: "adobe-garamond-pro", "Times New Roman", Times;
  --fir-font-header: "foco", Helvetica;
  --fir-blue-twitter-alpha: rgba(85,172,238, 0.6);
  --fir-color-grey: rgba(0,0,0, 0.40);
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.fir-image-figure .fig-author-figure-title {
  color: var(--fir-color-grey);
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 400;
  font-size: 15px;
  margin-top: 2px;
}

.fir-imageover {
  position: relative;
  display: flex;
}
/* 
.fir-imageover-color {
  height: 80px;
  width: 80px;
  position: absolute;
  background: var(--fir-blue-twitter-alpha);
  background-image: none;
  border-radius: 100px;
  cursor: pointer;
  transition: background .3s ease-in-out;
  animation: fadeInFadeOut 2s infinite;
  top: 0;
  left: 0;
} */

/* .fir-imageover-image {
  position: absolute;
  top: 0;
  left: 0;
  animation: fadeInFadeOut 2s infinite;
}

@keyframes fadeInFadeOut {
  0%   { opacity:1; }
  50%  { opacity:0; }
  100% { opacity:1; }
} */
    
</style>