import Vue from 'vue'
import Memory from '@/components/Memory'

describe('Memory.vue', () => {
  it('should render correct static contents', () => {
    const Constructor = Vue.extend(Memory)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('button')[0].textContent)
      .to.equal('mala')
    expect(vm.$el.querySelectorAll('button')[1].textContent)
    .to.equal('srednja')
    expect(vm.$el.querySelectorAll('button')[2].textContent)
    .to.equal('velika')
  })
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Memory)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.cont').textContent)
      .to.equal('')
  })
})
