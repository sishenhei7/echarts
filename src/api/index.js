import request from './request';

const nickname = 'sishenhei7';
// const nickname = 'reminia';
const url = `https://api.github.com/repos/${ nickname }/${ nickname }.github.io/issues`;

export default {
  getBlogList: () => request.get(url)
}






















