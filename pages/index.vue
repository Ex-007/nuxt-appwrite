<template>
  <div class="container"> 
    <div class="head">
      <h3>ABTech</h3>
      <h3><nuxt-link to="/account">Account Page >>></nuxt-link></h3>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .head{
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    height: 50px;
    align-items: center;
    gap: 5px;
  }
  .head>h3{
    border: 2px solid white;
    padding: 3px;
  }
  a{
    color: white;
  }

  .accountPage{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
    