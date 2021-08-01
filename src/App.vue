<template>
  <div id="app">
    <div class="mobile-nav-block">
      <div class="icon">
        <router-link to="/"><img src="@/assets/T.png"></router-link> 
      </div>
      <span class="mobile-menu-icon" @click="openMobileNav()"><i class="material-icons">menu</i></span>
      <div class="github">
        <a href="https://github.com/tehilaCm" target="_blank"><img src="@/assets/github.png" title="Github"></a>
      </div>
    </div>
    <div class="mobile-nav">
      <router-link to="/" title="Home"><i class="material-icons" @click="openMobileNav()">home</i></router-link> 
      <router-link to="/about" title="About"><i class="material-icons" @click="openMobileNav()">person</i></router-link> 
      <router-link to="/skills" title="Skills"><i class="material-icons" @click="openMobileNav()">poll</i></router-link> 
      <router-link to="/myWork" title="My work"><i class="material-icons" @click="openMobileNav()">work</i></router-link> 
      <router-link to="/contact" title="Contact"><i class="material-icons" @click="openMobileNav()">email</i></router-link> 
    </div>
    <div class="nav">
      <div class="icon">
         <router-link to="/"><img src="@/assets/T.png"></router-link> 
      </div>
      <div class="nav-items">
        <router-link to="/" title="Home"><i class="material-icons">home</i></router-link> 
        <router-link to="/about" title="About"><i class="material-icons">person</i></router-link> 
        <router-link to="/skills" title="Skills"><i class="material-icons">poll</i></router-link> 
        <router-link to="/myWork" title="My work"><i class="material-icons">work</i></router-link> 
        <router-link to="/contact" title="Contact"><i class="material-icons">email</i></router-link> 
      </div>
      <div class="github">
        <a href="https://github.com/tehilaCm" target="_blank"><img src="@/assets/github.png" title="Github"></a>
      </div>
    </div>
    <div class="scroll-up" onClick="window.scroll({ top: 0,left: 0,behavior: 'smooth' });">
      ^  
    </div>
    <vue-page-transition name="zoom">
    <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
      openMobileNav: function(){
        let $ = require('jquery');
        $(".mobile-nav").animate({width:'toggle'});     
      }
  }
}

//scroll-up
let $ = require('jquery');
window.addEventListener("scroll",function(){
  if(window.pageYOffset > 600){
      $( ".scroll-up" ).show( "slow" );
  }
  else if(window.pageYOffset < 500){
       $( ".scroll-up" ).hide( "slow" );
  }
},false);

</script>

<style>
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #1f1f1f;
    overflow-x: hidden;
  }

  .mobile-nav{
    display: block;
  }

  .nav {
    background-color: #181818;
    height: 5rem;
    display: none;
    position: fixed;
    z-index: 1;
    width: 5rem;
    height: 100%;
  }

  .nav-items{
    margin-top: 5rem;
  }

  .nav-items a {
    font-weight: bold;
    color: #969494;
  }

  .nav .icon{
    background-color: black;
    padding: 1rem;
  }

  .nav .icon img{
    width: 100%;
    height: 100%;
  }

  .nav-items a.router-link-exact-active, .mobile-nav a.router-link-exact-active{
    color: #00c3ff
  }

  .nav .github{
    margin: 4rem auto auto;
  }

  .github img{
    background-color: #969494;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
  }

  .mobile-nav-block{
    height: 5rem;
    background-color: #181818;
    display: flex;
  }

  .mobile-nav-block .icon{
    background-color: black;
    width: 5rem;
    display: inline-block;
    padding: 1rem;
  }

  .mobile-nav-block .icon img{
    width: 100%;
    height: 100%;
  }

  .mobile-nav-block .github{
    position: absolute;
    z-index: 1;
    left: 6rem;
    top: 1.5rem;
  }

  .mobile-nav{
    background-color: #181818;
    position: absolute;
    z-index: 1;
    display: none;
    top: 5rem;
    width: 100%;
    height: 4rem;
  }

  .mobile-nav a{
    color: #969494;
    width: 20%;
    float: left;
  }

  .mobile-menu-icon{
    width: 3rem;
    height: 3rem;
    right: 1rem;
    margin: 1.7rem 0rem;
    position: absolute;
    cursor: pointer;
    color: white;
    display: block;
    width: fit-content;
  }

  .mobile-menu-icon i{
    font-size: 2.5rem;
  }

  .mobile-nav a i, .nav a i{
    font-size: 2rem;
    margin: 1rem;
  }

  .scroll-up {
    width: 2.5rem;
    height: 2.5rem;
    color: #00c3ff;
    position: fixed;
    bottom: 7rem;
    right: 2rem;
    z-index: 5;
    border: 3px solid #00c3ff;
    background-color: transparent;
    border-radius: 50%;
    padding: 0.3rem;
    font-size: 1.4rem;
    font-weight: bold;
    display: none;
    cursor: pointer;
  }

  @media (min-width: 40rem)
  {
    .mobile-menu-icon{
      display: none;
    }

    .mobile-nav-block{
      display: none;
    }

    .mobile-nav{
      display: none;
      visibility: hidden;
    }

    .nav{
      display: block;
    }

    .github{
      position: absolute;
      left: 1.3rem;
      bottom: 1rem;
    }

    .scroll-up {
      bottom: 6rem;
      right: 3rem;
    }
  }

    @media(min-width: 95rem)
    {
      .nav-items{
        margin-top: 10rem;
      }
    }
  
</style>
