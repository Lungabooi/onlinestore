<template>
   <div class="company">
    <div class="img">
      <img src="https://i.postimg.cc/qvCp3tP8/reading-4514041-1920.png" alt="" />
    </div>
    <div class="company-info">
      <span>Leave <span class="our"> A Bookmark</span></span>
      <p>
        <b>Our</b>  commitment to service manifests in the brilliant teams of booksellers that serve every store, teams who ensure that you get the book you’re after every time you visit, that you are treated with respect, and that there is always knowledgeable assistance should you want some recommendations.
      </p>
    </div>
  </div>
  <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <span class="logo_name">Leave A Bookmark</span>
        </div>
        <div class="media-icons">
          <a target="on_blank" href="#"><i class="fab fa-facebook"></i></a>
          <a target="on_blank" href=""><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Links</li>
          <li><router-link to="/">Home</router-link></li>
          <li> <router-link to="/Contact">Contact</router-link></li>
          <li> <router-link to="/About">About</router-link></li>
          <li> <router-link to="/Login">Login</router-link></li>
          <li> <router-link to="/Register">Register</router-link></li>
    

        </ul>
        <ul class="box">
          <li class="link_name">Clients</li>
          <li><a href="https://www.bargainbooks.co.za/">Bargain Books</a></li>
          <li><a href="{% url 'category' 5 %">Art and Culture</a></li>
          <li><a href="{% url 'category' 11 %">People</a></li>
          <li><a href="{% url 'category' 2 %">Travel</a></li>

        </ul>
        <ul class="box">
          <li class="link_name">Legal Info</li>
          <li><a href="{% url 'licence' %}">Licence</a></li>
          <li><a href="{% url 'terms' %}">Terms and Conditions</a></li>
          <li><a href="{% url 'privacy' %}">Privacy Policies</a></li>

        </ul>
        <ul class="box">
          <li class="link_name">Contact</li>
          <li><a target="on_blank" href="tel:+919079680135">084 269 8713</a></li>
          <li><a target="on_blank" href="mailto:'Lungalucasbooi@gmail.com'">Lungalucasbooi@gmail.com</a></li>
        </ul>
      </div>
    </div>

    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2022 <a href="#">Leave A Bookmark.</a></span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  min-height: 100vh;
}
/* -----------------company----------------------- */
.company {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.company-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.img {
  width: 100%;
  margin: 1rem 0rem 0rem 2rem;
}
.img img {
  width: 100%;
}
.company-info {
  width: 100%;
  margin-right: 4rem;
}
.company-info span {
  font-size: 2.5rem;
  font-weight: bold;
}
.company-info span .our {
  color: #88289d;
}
.company-info p{
  font-size: 1.1rem;
}
/* ----------------------------------------------- */
.team {
  display: flex;
  justify-content: center;
}
.team span {
  font-size: 2.5rem;
  font-weight: bold;
  border-bottom: 4px solid #FFDC0E;
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.card {
  position: relative;
  background: #fff;
  max-width: 350px;
  width: 350px;
  margin: 20px;
  border-radius: 2px;
  box-shadow: 0 5px 25px rgb(1 1 1 / 10%);
}
.card-image {
  max-height: 50vh;
  overflow: hidden;
}
.card-image img {
  max-width: 100%;
  height: auto;
  visibility: hidden;
}
.card-title span {
  visibility: hidden;
}
.yellow-surname {
  color: #FFDC0E;
}
.card-description span {
  visibility: hidden;
}
.card-mediaIcons a i {
  visibility: hidden;
}
.card-info {
  position: relative;
  color: #222;
  padding: 20px;
}
.card-info h3 {
  font-size: 1.4em;
  font-weight: 700;
  margin-bottom: 10px;
}
.card-info h4 {
  font-size: 1rem;
  font-weight: normal;
}
.card-info a {
  text-decoration: none;
  color: navy;
}
.card-info p {
  font-size: 1em;
  margin-bottom: 15px;
}
.card-info .card-mediaIcons {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-info .card-mediaIcons a {
  color: #999;
  font-size: 1.4em;
  margin: 0 10px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50%;
  transition: color 0.3s ease;
}
.card-info .card-mediaIcons a:hover {
  color: #222;
}
.card-mediaIcons a img {
  width: 40px;
}
.loading {
  position: relative;
  background: #E2E2E2;
  overflow: hidden;
}
.loading:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: translateX(-100%);
  animation: loading 1.5s infinite;
}
.info {
  font-size: 1.2rem;
  font-weight: 500;
}
@keyframes loading {
  100% {
    transform: translateX(100%);
  }
}
/* ------------------------------footer---------------------------------------- */
footer {
  background: #000;
  width: 100%;
  bottom: 0;
  left: 0;
}
footer .content {
  max-width: 1250px;
  margin: auto;
  padding: 30px 40px 40px 40px;
}
footer .content .top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}
.content .top .logo-details {
  color: #FDD166;
  font-size: 30px;
}
.content .top .media-icons {
  display: flex;
}
.content .top .media-icons a {
  height: 40px;
  width: 40px;
  margin: 0 8px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 17px;
  text-decoration: none;
  transition: all 0.4s ease;
}
.top .media-icons a:nth-child(1) {
  background: #4267B2;
}
.top .media-icons a:nth-child(1):hover {
  color: #4267B2;
  background: #fff;
}
.top .media-icons a:nth-child(2) {
  background: #E1306C;
}
.top .media-icons a:nth-child(2):hover {
  color: #E1306C;
  background: #fff;
}
footer .content .link-boxes {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
footer .content .link-boxes .box {
  width: calc(100% / 5 - 10px);
}
.content .link-boxes .box .link_name {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  position: relative;
}
.link-boxes .box .link_name::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 35px;
  background: #FDD166;
}
.content .link-boxes .box li {
  margin: 6px 0;
  list-style: none;
}
.content .link-boxes .box li a {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.4s ease;
}
.content .link-boxes .box li a:hover {
  opacity: 1;
  text-decoration: underline;
}
.content .link-boxes .input-box {
  margin-right: 55px;
}
.link-boxes .input-box input {
  height: 40px;
  width: calc(100% + 55px);
  outline: none;
  border: 2px solid #AFAFB6;
  background: #140B5C;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  color: #fff;
  margin-top: 5px;
}
.link-boxes .input-box input::placeholder {
  color: #AFAFB6;
  font-size: 16px;
}
.link-boxes .input-box input[type="button"] {
  background: #fff;
  color: #140B5C;
  border: none;
  font-size: 18px;
  font-weight: 500;
  margin: 4px 0;
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.4s ease;
}
.input-box input[type="button"]:hover {
  opacity: 1;
}
footer .bottom-details {
  width: 100%;
  background: #000;
  border-top: 0.5px solid #fff;
}
footer .bottom-details .bottom_text {
  max-width: 1250px;
  margin: auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
}
.bottom-details .bottom_text span,
.bottom-details .bottom_text a {
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  opacity: 0.8;
  text-decoration: none;
}
.bottom-details .bottom_text a:hover {
  opacity: 1;
  text-decoration: underline;
}
.bottom-details .bottom_text a {
  margin-right: 10px;
}
/* ------------------------------------------media-footer------------------------------------------- */
@media (max-width: 900px) {
  .company-info {
    width: 100%;
    margin-right: 0rem;
    margin-left: 1rem;
  }
  .company-info p{
    margin-right: 2rem;
    text-align: center;
  }
  .company-info span {
    font-size: 1.7rem;
    font-weight: bold;
    text-align: center;
  }
  .team {
    display: flex;
    justify-content: center;
  }
  .team span {
    font-size: 1.7rem;
    font-weight: bold;
  }
  .company {
    display: flex;
    flex-direction: column;
  }
  .img {
    margin-left: 0rem;
  }
  footer .content .link-boxes {
    flex-wrap: wrap;
  }
  footer .content .link-boxes .input-box {
    width: 40%;
    margin-top: 10px;
  }
}
@media (max-width: 700px) {
  footer {
    position: relative;
  }
  .content .top .logo-details {
    font-size: 26px;
  }
  .content .top .media-icons a {
    height: 35px;
    width: 35px;
    font-size: 14px;
    line-height: 35px;
  }
  footer .content .link-boxes .box {
    width: calc(100% / 3 - 10px);
  }
  footer .content .link-boxes .input-box {
    width: 60%;
  }
  .bottom-details .bottom_text span,
  .bottom-details .bottom_text a {
    font-size: 12px;
  }
}
@media (max-width: 520px) {
  footer::before {
    top: 145px;
  }
  footer .content .top {
    flex-direction: column;
  }
  .content .top .media-icons {
    margin-top: 16px;
  }
  footer .content .link-boxes .box {
    width: calc(100% / 2 - 10px);
  }
  footer .content .link-boxes .input-box {
    width: 100%;
  }
}
@media(max-width:320px){
  .company-info p{
    margin-right: 0rem;
  }
}

    
</style>