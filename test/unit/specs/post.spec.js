import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'

describe('Post.vue', () => {
  const createComponet = () => {
    const PostContructor = Vue.extend(Post)
    const comp = new PostContructor({
      propsData: {
        link: 'http://www.pluralsight.com'
      }
    }).$mount()

    return comp
  }

  it('should render the link', () => {
    const comp = createComponet()
    expect(
      comp.$el.querySelector('.card-footer-item').getAttribute('href')
    ).to.equal('http://www.pluralsight.com')
  })

  it("should update element's href when properly link changes", done => {
    const comp = createComponet()

    expect(
      comp.$el.querySelector('.card-footer-item').getAttribute('href')
    ).to.equal('http://www.pluralsight.com')

    comp.link = 'http://www.nicomit.com'
    Vue.nextTick(() => {
      expect(
        comp.$el.querySelector('.card-footer-item').getAttribute('href')
      ).to.equal('http://www.nicomit.com')

      done()
    })
  })
})
