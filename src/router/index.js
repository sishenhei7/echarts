import Vue from 'vue';
import VueRouter from 'vue-router';
import Category1Test1 from '../views/Category1Test1';
import Category1Test2 from '../views/Category1Test2';
import Category2Test1 from '../views/Category2Test1';
import Category2Test2 from '../views/Category2Test2';
import Parent from '../views/Parent';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/category1',
      component: Parent,
      children: [
        {
          path: 'test1',
          component: Category1Test1
        },
        {
          path: 'test2',
          component: Category1Test2
        }
      ]
    },
    {
      path: '/category2',
      component: Parent,
      children: [
        {
          path: 'test1',
          component: Category2Test1
        },
        {
          path: 'test2',
          component: Category2Test2
        }
      ]
    }
  ]
});

export default router;

// const router = new VueRouter({
//   routes: [
//     {
//       path: '/category1/:id',
//       component: require('../App'),
//       children: [
//         {
//           path: '/test1',
//           component: require('../views/Category1Test1')
//         },
//         {
//           path: '/test2',
//           component: require('../views/Category1Test2')
//         }
//       ]
//     },
//     {
//       path: '/category2/:id',
//       component: require('../App'),
//       children: [
//         {
//           path: '/test1',
//           component: require('../views/Category2Test1')
//         },
//         {
//           path: '/test2',
//           component: require('../views/Category2Test2')
//         }
//       ]
//     },
//     {
//       path: '/',
//       component: require('../App.vue')
//     }
//   ]
// });
