<template>
  <div>
   <section>
    <div class="skewed"></div>

    <p>Welcome to my book store</p>
    <img url="https://i.postimg.cc/zvbNWKk0/serge-kutuzov-HCBm-Csa-F0-GY-unsplash.jpg">

    
    
    <router-link to="/Login"><button class="button-33" role="button">Login</button></router-link>
  
   </section>
    
  </div>
</template>
<script>

</script>
<style scoped>

p{
  position: absolute;
  margin-top: 11rem;
  margin-bottom: 0rem;
  margin-right: 5rem;
  margin-left: 4rem;
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
  font-size: 26px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  position: relative;
  margin-top: 45rem;
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

.skewed {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2c3e50;
  z-index: -19;
  transform: skewY(-18deg);
  transform-origin: top left;
}
</style>