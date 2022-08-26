@<template >
  <div>
   <section>
    <p>Welcome to my book store</p>
    
    <router-link to="/Login"><button class="button-33" role="button">Login</button></router-link>
    
   </section>
    
  </div>
</template>
<script>

</script>
<style scoped>
section{
  background-image: url('https://i.postimg.cc/d04ZgBsb/janko-ferlic-sf-L-QOnmy00-unsplash.jpg');
  background-size: cover;
  position:relative;
  height: 100vh;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
  
}
p{
  position: absolute;
  margin-top: 11rem;
  margin-bottom: 0rem;
  margin-right: 5rem;
  margin-left: 20rem;
  color:gold;
  font-size: 50px;
  text-shadow: rgb(255, 255, 255);
  font-family: 'Times New Roman';
  
}

.button-33 {
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: relative;
  margin-top: 30rem;
}

.button-33:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}

@media only screen and (max-width: 600px) {
  p {
   margin: auto;
   padding-top: 50%;
  }
}
</style>