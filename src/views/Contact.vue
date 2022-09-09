<template >


<div class="container">
  <div class="row ">

    <div class="col-md-6">
        <h3> Let's partner up</h3>
        <p>Lets level up your wants, together</p>
        <form action="https://formspree.io/f/xvolwzyz"
  method="POST">
    
    <div class="group">      
      <input type="text"  name="name" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Name</label>
    </div>
      
    <div class="group">      
      <input type="text" name="Email" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Email</label>
    </div>

    <div class="group">      
      <input type="text"  name="number" required>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Contact</label>
    </div>
    <button>Send Message</button>
    
    
  </form>
   

    </div>

    <div class="col-md-6" >
        <img class=image  src="https://i.postimg.cc/VLxmWx4X/fox-1284512-1920.jpg" >
        
        

    </div>

  </div>
  
</div>
<div>
    <footer>
    All rights Reserved ||  Lunga Booi &#169;2022

  </footer>
</div>

</template>
<script>


</script>
<style scoped>
footer{
    margin-top: 39rem;
    background: black;
    color: white;
    
}

.text{
    color: white;

}
.h3, h3 {
    font-size: calc(1.3rem + .6vw);
    margin-top: 4rem;
    padding-top: -1rem;
}
.container{
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin-left:4rem;
    
}
img, svg {
    vertical-align: middle;
    width: 764px;
    min-height: 597px;
    background:linear-gradient(rgba(116, 79, 79, 0.8), rgba(111, 40, 40, 0.2)), 
}

h1{
    position: relative;
}

form{
    margin-top: 149px;
}

.group        { 
  position:relative; 
  margin-bottom:45px; 
}
input         {
  font-size:18px;
  padding:10px 10px 10px 5px;
  display:block;
  width:300px;
  border:none;
  border-bottom:1px solid #757575;
}
input:focus     { outline:none; }

label{
  color:#999; 
  font-size:18px;
  font-weight:normal;
  position:absolute;
  pointer-events:none;
  left:5px;
  top:10px;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}

/* active state */
input:focus ~ label, input:valid ~ label    {
  top:-20px;
  font-size:14px;
  color:#5264AE;
}

/* BOTTOM BARS ================================= */
.bar  { position:relative; display:block; width:300px; }
.bar:before, .bar:after   {
  content:'';
  height:2px; 
  width:0;
  bottom:1px; 
  position:absolute;
  background:#5264AE; 
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
}
.bar:before {
  left:50%;
}
.bar:after {
  right:50%; 
}

/* active state */
input:focus ~ .bar:before, input:focus ~ .bar:after {
  width:50%;
}

/* HIGHLIGHTER ================================== */
.highlight {
  position:absolute;
  height:60%; 
  width:100px; 
  top:25%; 
  left:0;
  pointer-events:none;
  opacity:0.5;
}

/* active state */
input:focus ~ .highlight {
  -webkit-animation:inputHighlighter 0.3s ease;
  -moz-animation:inputHighlighter 0.3s ease;
  animation:inputHighlighter 0.3s ease;
}

/* ANIMATIONS ================ */
@-webkit-keyframes inputHighlighter {
  from { background:#5264AE; }
  to  { width:0; background:transparent; }
}
@-moz-keyframes inputHighlighter {
  from { background:#5264AE; }
  to  { width:0; background:transparent; }
}
@keyframes inputHighlighter {
  from { background:#5264AE; }
  to  { width:0; background:transparent; }
}
@media only screen and (max-width: 667px) {
  section{
    display: flex;
    flex-direction: column;
  }
  .image{
    display: none;
  }
}

    
</style>