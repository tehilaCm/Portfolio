<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  name: "About",
   created() {
        window.scrollTo(0,0);
    }
}
</script>

<style scoped>

  .about{
      min-height: calc(100vh - 5rem);
      background-color: #1f1f1f;
    }

    @media (min-width: 40rem)
    {
      .about{
        min-height: calc(100vh);
      }
    }

</style>
