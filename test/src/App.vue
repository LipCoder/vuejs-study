<template>
  <div id="app">
    <layout-header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LayoutHeader from './components/layout/LayoutHeader.vue'

export default {
  name: 'App',

  // 지역 컴포넌트 선언
  components: {   
    LayoutHeader,
  }
}
</script>

<style>
</style>
