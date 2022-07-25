<template>
  <div class="app">
    <div>
      <app-nav />
    </div>
    <router-view class="page" />
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'

export default {
  components: { AppNav },

  created () {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
  }
}
</script>

<style scoped>
*{
  padding: 0%;
  box-sizing: border-box;
}
.app {
width: 100%;
height: 100%;
}
.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>