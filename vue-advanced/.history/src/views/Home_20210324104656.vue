<template>
  <!-- <div >
    <div id="nav">
    <router-link to="/Home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/help">Help</router-link>
  </div> -->
  <h2>Home</h2>
  <router-link to="/">跳转到Login页面</router-link>
  <!-- </div> -->
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>