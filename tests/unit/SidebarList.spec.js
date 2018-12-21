import {
  mount,
  createLocalVue
} from '@vue/test-utils';
import MuseUI from 'muse-ui';
import SidebarList from '@/components/SidebarList.vue';

const localVue = createLocalVue();
localVue.use(MuseUI);


describe('SidebarList.vue', () => {
  it('should contain Nav 1', () => {
    const wrapper = mount(SidebarList, {
      localVue
    });
    expect(wrapper.html()).toContain('Nav 1');
  });

  // it('点击展开包含Category1Test1', () => {
  //   const wrapper = mount(SidebarList, {
  //     localVue
  //   });
  //   wrapper.find('.list1').trigger('click');
  //   console.log('wrapper', wrapper.html());
  //   expect(wrapper.html()).toContain('Category1Test1');
  // });
})