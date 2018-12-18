<template>
  <mu-drawer v-resize="resize" :open.sync="open" :docked="docked" :right="position === 'right'" :z-depth="4">
    <mu-appbar style="width: 100%;" title="Echarts" :z-depth="1"></mu-appbar>
    <SidebarList/>
  </mu-drawer>
</template>

<script>
import SidebarList from '@/components/SidebarList.vue';

export default {
  props: ['open'],
  data () {
    return {
      docked: true,
      position: 'left'
    }
  },
  components: {
    SidebarList
  },
  methods: {
    resize () {
      if(window.innerWidth > 1000) {
        this.open = true;
        this.docked = true;
      } else {
        this.open = false;
        this.docked = false;
      }
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


