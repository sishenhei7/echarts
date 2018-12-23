<template>
    <mu-appbar class="topbar" color="primary">
      <mu-button @click="openSidebar" class="topbar-button" icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Echarts demo
    </mu-appbar>
</template>

<script>
export default {
  name: 'Topbar',
  props: ['open'],
  methods: {
    openSidebar() {
      this.$emit('update:open', true);
    }
  }
}
</script>

<style scoped lang="less">
.topbar {
  position: fixed;
  left: 256px;
  right: 0;
  top: 0;
  transition: all .45s cubic-bezier(.23,1,.32,1);
  -webkit-transition: all .45s cubic-bezier(.23,1,.32,1);
  &.is-open {
    left: 256px;
  }
}

.topbar-button {
  display: none;
}

@media screen and (max-width: 1000px) {
  .topbar {
    left: 0;
  }
  .topbar-button {
    display: block;
  }
}
</style>
