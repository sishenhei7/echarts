import {
  mount,
  createLocalVue
} from '@vue/test-utils';
import MuseUI from 'muse-ui';
import App from '@/App.vue';
import SidebarList from '@/components/SidebarList.vue';
import Content from '@/components/Content.vue';
import Topbar from '@/components/Topbar.vue';

const localVue = createLocalVue();
localVue.use(MuseUI);

describe('App.vue', () => {

  beforeEach(() => {
    console.log('beforeEach');
  });

  it('触发openSidebar事件后open为true', () => {
    const wrapper = mount(App, {
      localVue,
      stubs: {
        SidebarList,
        Content,
        Topbar
      }
    });
    console.log(wrapper.html());
    wrapper.find(Topbar).vm.$emit('openSidebar');
    expect(wrapper.vm.open).toBe(true);
    console.log('wrapper.vm.open', wrapper.vm.open);
    // expect(true).toBe(true);
  });
})