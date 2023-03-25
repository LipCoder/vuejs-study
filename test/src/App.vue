<template>
  <div id="app">
    <LayoutHeader />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LayoutHeader from './components/layout/LayoutHeader.vue'

export default {
  name: 'App',
  components: {
    LayoutHeader,
  }
}
</script>

<style>
</style>
