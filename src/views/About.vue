<template>
  <div class="about">
    <h1>About myself</h1>
    <div class="details">
      <p>I studied software practical engineering between 2016-2019.</p>
      <p>I finished at the top of my class with final score of 95.</p>
      <p>My final project is an android native application in java for android, using android studio.</p>
      <p>Building UI for android using android SDK, hosted on firebase.</p>
      <p>I studied online curses: CSS, fullstack, Vue js framework.</p>
    </div>
    <div class="code">
      <img src="@/assets/coding3.png" class="rotating">
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
   mounted() {
        window.scrollTo(0,0);
    }
}
</script>

<style scoped>

  .about{
      min-height: calc(100vh - 5rem);
      overflow: hidden;
      position: relative;
    }

  h1{
      padding-top: 3rem;
      color: #00c3ff;
      font-size: 2.5rem;
  }

  .details{
    width: fit-content;
    margin: auto;
    max-width: 40rem;
  }

  p{
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem;
  }

  .code{
    margin-top: 4rem;
    margin-bottom: 3rem;
  }

  @-webkit-keyframes rotating {
    from{
        -webkit-transform: rotate(0deg);
    }
    to{
        -webkit-transform: rotate(360deg);
    }
  }

  .rotating {
      -webkit-animation: rotating 8s linear infinite;
      width: 13rem;
  }

  @media (min-width: 40rem)
  {
    .about{
        min-height: calc(100vh);
        width: calc(100% - 5rem);
        margin-left: 5rem;
    }

    h1{
          font-size: 3rem;
    }

    .code{
      margin-bottom: 0;
    }

    .rotating{
      width: 16rem;
    }
  }

</style>
