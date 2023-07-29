import { shallowMount } from '@vue/test-utils'
import ProductData from '@/components/ProductData.vue'

describe('ProductData.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(ProductData, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
