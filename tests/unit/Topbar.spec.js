import {
  mount,
  createLocalVue
} from '@vue/test-utils';
import MuseUI from 'muse-ui';
import Topbar from '@/components/Topbar.vue';

const localVue = createLocalVue();
localVue.use(MuseUI);

describe('Topbar.vue', () => {
  it('触发了openSidebar事件', () => {
    const wrapper = mount(Topbar, {
      localVue
    });
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted().openSidebar).toBeTruthy();
  });
})