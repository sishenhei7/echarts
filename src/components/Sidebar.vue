<template>
  <mu-appbar class="app-topbar" :class="{ 'is-open': open }" color="primary">
    <mu-button @click="open = true" v-show="!open" icon slot="left">
      <mu-icon value="menu"></mu-icon>
    </mu-button>
    Echarts demo
  </mu-appbar>
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


