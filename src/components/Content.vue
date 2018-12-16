<template>
  <div class="app-content" :class="{ 'is-open': open }">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: [
    'open',
  ]
}
</script>


