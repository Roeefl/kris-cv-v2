<template>
  <MainPage />
</template>

<script>
  import MainPage from './views/MainPage';

  export default {
    name: 'App',
    components: {
      MainPage,
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Heebo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: gray;
    color: #2c3e50;
    direction: rtl;
    display: flex;
    justify-content: center;
    padding: 16px;
  }
</style>
