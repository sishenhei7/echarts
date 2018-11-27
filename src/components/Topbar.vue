<template>
    <mu-appbar class="topbar" color="primary">
      <mu-button @click="open = false" class="topbar-button" icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Echarts demo
    </mu-appbar>
</template>

<script>
export default {
  props: ['open']
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
