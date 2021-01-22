import { mount, shallowMount } from '@vue/test-utils'
import MyCarMaintenanceProject from '@/components/MyCarMaintenanceProject.vue'

describe('MyCarMaintenanceProject.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(MyCarMaintenanceProject, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)

    // const trArray = wrapper.findAll('tr').at(0).element.firstChild.textContent
    const firstRow = wrapper.findAll('tr').at(0).element.children
    // expect(firstRow.length).toBe(5)
    console.log(firstRow.item(0).textContent)
    console.log(firstRow.item(1).textContent)
    console.log(firstRow.at(0).text())
    const name = firstRow.item(1).textContent
    console.log(name)
    const type = firstRow.item(2).textContent
    const cycle = firstRow.item(3).textContent
    const lastMaintainDate = firstRow.item(4).textContent
    expect(name).toBe('机油')
    expect(type).toBe('保养')
    expect(cycle).toBe('3 天')
    expect(lastMaintainDate).toBe('2020-12-01')

  })
})
