<template>
  <div id="app">
    <div class="mobile-nav-block">
      <div class="icon">
        <img src="@/assets/T.png">
      </div>
      <span class="mobile-menu-icon" @click="openMobileNav()"><i class="material-icons">menu</i></span>
    </div>
    <div class="mobile-nav">
      <router-link to="/" title="Home"><i class="material-icons">home</i></router-link> 
      <router-link to="/" title="About"><i class="material-icons">person</i></router-link> 
      <router-link to="/" title="Skills"><i class="material-icons">work</i></router-link> 
      <router-link to="/" title="My work"><i class="material-icons">visibility</i></router-link> 
      <router-link to="/" title="Contact"><i class="material-icons">email</i></router-link> 
      <router-link to="/about">About</router-link>
    </div>
    <div class="nav">
      <div class="icon">
        <img src="@/assets/T.png">
      </div>
      <div class="nav-items">
        <router-link to="/" title="Home"><i class="material-icons">home</i></router-link> 
        <router-link to="/" title="About"><i class="material-icons">person</i></router-link> 
        <router-link to="/" title="Skills"><i class="material-icons">work</i></router-link> 
        <router-link to="/" title="My work"><i class="material-icons">visibility</i></router-link> 
        <router-link to="/" title="Contact"><i class="material-icons">email</i></router-link> 
        <router-link to="/about">About</router-link>
      </div>
    </div>
    <router-view />
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
</script>

<style>

  html{
    overflow: hidden;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .mobile-nav{
    display: block;
  }

  .nav {
    background-color: #181818;
    height: 5rem;
    display: none;
    position: absolute;
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
  }
  
</style>
