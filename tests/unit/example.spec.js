import MyCarMaintenanceProject from '@/components/MyCarMaintenanceProject.vue'
import { mount } from '@vue/test-utils'
import { getMaintenanceProjects } from '../../src/api/service'
import { flushPromises } from '../flushPromises'
jest.mock('../../src/api/service.js', () => {
  return {
    getMaintenanceProjects: jest.fn().mockResolvedValue([
      {
        name: '机油',
        type: '保养',
        cycle: '3',
        unit: 'day',
        lastMaintainDate: '2020-12-01'
      }])
  }
})
describe('MyCarMaintenanceProject.vue', () => {
  it('should ', async function () {
    const wrapper = mount(MyCarMaintenanceProject)
    await flushPromises()

    expect(wrapper.vm.projects.length).toBe(1)
    const firstRow = wrapper.findAll('tr').at(1).element.children
    const name = firstRow.item(1).textContent
    const type = firstRow.item(2).textContent
    const cycle = firstRow.item(3).textContent
    const lastMaintainDate = firstRow.item(4).textContent

    expect(name).toBe('机油')
    expect(type).toBe('保养')
    expect(cycle).toBe('3 天')
    expect(lastMaintainDate).toBe('2020-12-01')

  })
})
