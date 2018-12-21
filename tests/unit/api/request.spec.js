import nock from 'nock';
import MuseUI from 'muse-ui';
import Toast from 'muse-ui-toast';
import { get, post } from '@/api/request';
// const Toast = jest.mock('muse-ui-toast');

mockHost = 'http://some';
mockUrl = 'http://some/test';

const localVue = createLocalVue();
localVue.use(MuseUI);

describe('request', () => {

  beforeAll(() => {
    console.log('global', global);
  });

  afterEach(() => {
    nock.cleanAll();
  });

  afterAll(() => {
    nock.restore();
  });

  it('should catch and throw error 401', (done) => {
    const status = 401;

    nock(mockUrl)
      .get('/test')
      .reply(status, {
        mes: 'no rights'
      });

    const wrapper = shallowMount(get, localVue);

    get(mockUrl).then((res) => {
      expect(res.status).toBe(401);
      done();
    });
  })
})


