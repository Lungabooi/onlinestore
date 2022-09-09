<template>
  <div>
   <section>
    <div class="skewed"></div>

    <p> <strong>Welcome to my book store</strong></p>
    <p class="qoute"> ''A book is a gift <br> that you can open again and again.''</p>
 <router-link to="/Login"><button class="button-33" role="button">Login</button></router-link>
  
   </section>
    
  </div>
</template>
<script>

</script>



<style scoped>
  
  img {
    height: 509px;
    width: 500px;
    position: absolute;
    margin-bottom: 12rem;
    margin-top: 4rem;
    margin-left: 14rem;
    box-shadow: 10px 10px 5px 12px rgb(95, 116, 123);
}
img:hover{
  opacity: 0.5;

}

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
.qoute{
  position: absolute;
  margin-top: 17rem;
  margin-bottom: 0rem;
  margin-right: 5rem;
  margin-left: 4rem;
  /* color:rgb(160, 144, 57); */
  color: white;
  text-shadow: 2px 2px 4px #000000;
  font-size: 50px;
  text-shadow: rgb(255, 255, 255);
  font-family: 'Times New Roman';

}

.button-33 {
  background-color: #c2fbd7;
  border-radius: 50px;
  box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
  color: rgb(160, 171, 63);
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
  margin-top: 35rem;
}

.button-33:hover {
  box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
  transform: scale(1.05) rotate(-1deg);
}

/* @media only screen and (max-width: 600px) {
  p {
   margin: auto;
   padding-top: 50%;
  }
} */

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