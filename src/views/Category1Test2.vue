<template>
  <ul v-if="loading">
    <li v-for="item in blogTitles" :key="item">{{ item }}</li>
  </ul>
  <div v-else>数据请求中，请稍后。。。</div>
</template>

<script>
import api from '../api';
export default {
  data() {
    return {
      blogTitles: [],
      loading: true
    }
  },
  created() {
    const tempBlogTitles = [];
    api.getBlogList().then((res) => {
      // console.log('hahahah', res);
      res.forEach(item => tempBlogTitles.push(item.title));
    });
    this.blogTitles = tempBlogTitles;
  }
}
</script>
