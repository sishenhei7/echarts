<template>
  <div id="app">
    <Sidebar :openSidebar.sync="open"/>
    <Topbar :open.sync="open"/>
    <Content open="open"/>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Content from '@/components/Content.vue';
import Topbar from '@/components/Topbar.vue';

export default {
  name: 'app',
  components: {
    Sidebar,
    Content,
    Topbar,
  },
  data () {
    return {
      docked: true,
      open: true,
      position: 'left'
    }
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
    },
    openSidebar () {
      this.open = true;
    }
  }
}
</script>

<style lang="less">
@import './App.less';
.app-topbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transition: all .45s cubic-bezier(.23,1,.32,1);
  -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
  &.is-open {
    left: 256px;
  }
}

.app-content {
  position: absolute;
  left: 0;
  right: 0;
  top: 64px;
  bottom: 0;
  transition: all .45s cubic-bezier(.23,1,.32,1);
  -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
  &.is-open {
    left: 256px;
  }
}
</style>
