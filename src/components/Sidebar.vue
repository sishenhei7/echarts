<template>
  <mu-drawer v-resize="resize" :open.sync="open" :docked="docked" :right="position === 'right'" :z-depth="4">
    <mu-appbar style="width: 100%;" title="Echarts" :z-depth="1"></mu-appbar>
    <SidebarList/>
  </mu-drawer>
</template>

<script>
import SidebarList from '@/components/SidebarList.vue';

export default {
  props: ['openSidebar'],
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
        this.$emit('update:openSidebar', true);
        this.docked = true;
      } else {
        this.$emit('update:openSidebar', false);
        this.docked = false;
      }
    }
  },
  computed: {
    open: {
      get: function() {
        return this.openSidebar;
      },
      set: function(val) {
        this.$emit('update:openSidebar', val);
      }
    }
  }
}
</script>


