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

.absolute-md {
  position: absolute;
  margin:auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.mu-list {
  padding: 0;
}

@media only screen and (max-width: 1920px) {
  .echarts-wrap {
    width: 1300px;
    height: 650px;
  }
}

@media only screen and (max-width: 1400px) {
  .echarts-wrap {
    width: 900px;
    height: 450px;
  }
}

@media only screen and (max-width: 1000px) {
  .echarts-wrap {
    width: 800px;
    height: 400px;
  }
}

@media only screen and (max-width: 850px) {
  .echarts-wrap {
    width: 650px;
    height: 325px;
  }
}

@media only screen and (max-width: 700px) {
  .echarts-wrap {
    width: 500px;
    height: 250px;
  }
}

@media only screen and (max-width: 520px) {
  .echarts-wrap {
    width: 400px;
    height: 200px;
  }
}

@media only screen and (max-width: 400px) {
  .echarts-wrap {
    width: 300px;
    height: 150px;
  }
}

</style>
