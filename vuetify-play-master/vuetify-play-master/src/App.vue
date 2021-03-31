<template>
  <v-app id="app">
    <v-fade-transition>
      <router-view />
    </v-fade-transition>
  </v-app>
</template>
<script>
export default {
  provide() {
    return {
      app: this
    }
  },
  data() {
    return {
      userName: ''
    }
  },
  methods: {
    getUserName() {
      this.userName = 'taoranran' + Math.ceil(Math.random() * 100)
    }
  },
  mounted() {
    this.getUserName()
  },
  created() {}
}
</script>
<style lang="scss"></style>
