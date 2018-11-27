<template>
  <mu-drawer :open.sync="open" class="left-sidebar" :z-depth="4">
    <mu-appbar style="width: 100%;" title="Echarts" :z-depth="1"></mu-appbar>
  </mu-drawer>
</template>

<script>
export default {
  props: ['open'],
  data () {
    return {
      docked: false,
      position: 'left'
    }
  }
}
</script>


<style scoped lang="less">
@media screen and (max-width: 1000px) {
  .left-sidebar {
    -webkit-transform: translate3d(-100%,0,0);
    transform: translate3d(-100%,0,0);
    visibility: hidden;
  }
}
</style>


