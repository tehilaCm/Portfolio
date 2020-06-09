<template>
  <div class="home">
    <div class="icon">
      <p class="blue-T T">T</p>
      <p class="pink-T T">T</p>
    </div>
    <div class="home-front">
      <div class="discription">
        <p>Hi,</p>
        <p>I'm Tehila,</p>
        <p>front end developer.</p>
      </div>
    </div>
    <a href="https://drive.google.com/file/d/1PAThueFvMhlZI0WHNwXz9v8dgfCUm9S5/view?usp=sharing" target="_blank">Resume</a>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
      window.scrollTo(0,0);
  },
  methods: {
    getPDFPath: function() {
      var files = require.context('@/assets/', false)
      return files('./resume.pdf')
    }
  }
};
</script>

<style scoped>

  .home{
    min-height: calc(100vh - 5rem);
    overflow: hidden;
    position: relative;
  }

  .icon p{
    width: fit-content;
    position: absolute;
    font-size: 28rem;
    transform: rotate(340deg);
    font-family: sans-serif;
  }

  .blue-T{
    color: #00c3ff;
    right: -3.2rem;
    top: 0.7rem;
  }

  .pink-T{
    color: #f456d5;
    right: -2.2rem;
    top: 2rem;
  }

  .home-front{
    position: relative;
  }

  .discription{
    color: white;
    font-size: 2rem;
    padding: 2rem;
    padding-top: 6rem;
  }

  .discription p{
    text-align: left;
    font-size: 3rem;
    font-family: 'Lobster', cursive;
    padding-left: 1rem;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    display: flex;
    opacity: 0;
    -webkit-animation: type2 2s steps(40, end);
    animation: type2 2s steps(40, end);
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }

  .discription p:nth-child(3){
    white-space: normal;
  }

  @keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

  @-webkit-keyframes type2 {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      border: none;
    }
  }

   a{
    cursor: pointer;
    position: absolute;
    z-index: 1;
    left: 2rem;
    font-size: 1.5rem;
    text-decoration: none;
    color: #00c3ff;
    background-color: transparent;
    border: 2px solid #00c3ff;
    padding: 0.5rem;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  a:hover{
    color: #f456d5;
    background-color: transparent;
    border: 2px solid #f456d5;
  }

  @media (min-width: 27rem)
  {
    .discription p:nth-child(3){
      white-space: nowrap;
    }
  }

  @media (min-width: 40rem)
  {
    .home{
      min-height: calc(100vh);
    }

    .home-front {
      left: 9rem;
      top: 4rem;
    }

    .icon p{
      font-size: 40rem;
      margin-right: 15%;
    }

    .blue-T{
      top: -2rem;
    }

    .pink-T{
      top: 0;
    }

    .discription{
      padding-left: 0;
    }

    .discription p{
      font-size: 4rem;
    }

    a{
      top: 27rem;
      left: 11rem;
      font-size: 1.7rem;
    }
  }

  @media(min-width: 95rem)
  {
    .icon p{
      font-size: 50rem;
      margin-right: 10%;
    }

    .pink-T{
      top: 5rem;
    }

    .blue-T{
      top: 3rem;
    }

    .discription{
      padding-top: 13rem;
    }

    a{
      top: 35rem;
    }
  }

  @media(min-width: 110rem)
  {
    .icon p{
      font-size: 60rem;
    }

    .pink-T{
      top: -0.2rem;
    }

    .blue-T{
      top: -3rem;
    }

    .discription p{
      font-size: 5rem;
    }

    a{
      top: 39rem;
    }
  }
</style>