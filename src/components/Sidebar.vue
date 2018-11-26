<template>
    <mu-paper class="left-sidebar mu-drawer is-open" :z-depth="4">
        <mu-appbar style="width: 100%;" title="Echarts" :z-depth="1"></mu-appbar>
    </mu-paper>
</template>

<script>
export default {
  data () {
    return {
      docked: false,
      open: true,
      position: 'left'
    }
  }
}
</script>



