<template >
    <div>
<h2>User Profile</h2>
<div v-if="user">Welcome {{ user.full_name }}</div>
    </div>

    <div v-if="user" class="container">
			<div class="profile">
				<div class="pic">
					<div class="img"><img src="https://i.postimg.cc/mD2M5vfP/user-2935527-1280.png"/> </div>
					<i class="icon-plus"></i>
					<i class="icon-ok"></i>
				</div>
				<h4>{{user.full_name}}</h4>
				<p>{{user.email}}</p>
        <p>{{user.phone_number}}</p>
        <p>{{user.user_type}}</p>
			</div> <button type="button" class="btn btn-danger" @click="deleteUser(user.user_Id)">delete profile</button>
      <button type="button" class="btn btn-secondary">update profile</button></div>
</template>



<script>
export default {
  methods: {
    deleteUser(Id) {
      return this.$store.dispatch("deleteUser", Id);
    }},
    mounted() {
    this.$store.dispatch("getUser");
  },
  computed: {
 user(){
    return this.$store.state.user
 },
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
.container{
  width: 25%;
  margin: 0 37.5%;
  margin-top: 50px;
  height: 235px;
  display: flex;
  justify-content: center;
}

.profile[data-v-651c00fc] {
 
  margin: auto;
    display: block;
    width: 490px;
    height: 358px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 2px 10px rgb(0 0 0 / 25%);
    padding: 20px;
    text-align: center;
    box-sizing: border-box;
    -webkit-transition: all .25s;
    -moz-transition: all .25s;
}

.pic{
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 60px;
  background: rgba(101,132,124,.5);
  border: 6px solid #66847C;
  margin: auto;
  z-index: 10;
  overflow: hidden;
  text-align: right;
  cursor: pointer;
  -webkit-transition: all .35s ease-out;
  -moz-transition: all .25s;
}

.img{
  background: #FDF6E3;
  width: 100px;
  height: 100px;
  border-radius: 60px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,.6);
  z-index: 10;
}

img{
  width: 100%;	
  height: 100%;
}

h4{
  margin: 30px 0 0 0;
  font-size: 18px;
  color: #66847C;
  text-shadow: 0 2px 5px rgba(0,0,0,.15);
}

p{
  margin-top: 5px;
  font-size: 14px;
  color: rgba(101,132,124,.7);
}

.icon-plus{
  float: right;
  font-size: 25px;
  text-shadow: 0 2px 5px rgba(0,0,0,.5);
  position: relative;
  top: -60px;
  right: -25px;
  color: #fff;
  opacity: 0;
  z-index: 1;
  -webkit-transition: all .25s;
  -moz-transition: all .25s;
}

.profile:hover > .pic{
  width: 150px;
}

.pic:hover{
  background: rgba(101,132,124,.65);
}

.pic:hover > .icon-ok{
   right: -5px 
}

.pic.active > .icon-ok{
  opacity: 1;
  color: #66847C;
}

.profile:hover > .pic .icon-plus{
  opacity: 1;
  right: 15px;
}

.pic.active > .icon-plus{
  left: 1000px;
}

.icon-ok{
  float: right;
  font-size: 25px;
  text-shadow: 0 -1px 1px rgba(0,0,0,.6), 0 1px 1px rgba(255,255,255,.15);
  position: relative;
  top: -60px;
  right: -50px;
  color: #66847C;
  opacity: 0;
  z-index: 1;
  -webkit-transition: all .2s;
  -moz-transition: all .25s;
}
    
</style>