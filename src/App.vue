<template>
  <div id="app">
    <mu-drawer v-resize="resize" :open.sync="open" :docked="docked" :right="position === 'right'" :z-depth="4">
			<mu-appbar style="width: 100%;" title="Echarts" :z-depth="1"></mu-appbar>
      <SidebarList/>
    </mu-drawer>
    <mu-appbar class="app-topbar" :class="{ 'is-open': open }" color="primary">
      <mu-button @click="open = true" v-show="!open" icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Echarts demo
    </mu-appbar>
    <div class="app-content" :class="{ 'is-open': open }">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SidebarList from './components/SidebarList.vue';

export default {
  name: 'app',
  components: {
    SidebarList
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
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ccc;
}

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

.mu-list {
  padding: 0;
}
</style>
