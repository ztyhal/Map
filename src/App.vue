<template>
  <div id="app">
    <div class="style">地图功能展示</div>
    <router-link to="/m2" tag="button">二维地图</router-link>
    <router-link to="/m3" tag="button">三维地图</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Map from "./views/index.vue";
export default {
  name: "App",
  components: {
    Map,
  },
};
</script>

<style>
.style{
  border: 1px solid blue;
  text-align: center;
}
.router-link-active{
  color: blue;
}
</style>