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
        cycle: '3 天',
        lastMaintainDate: '2020-12-01'
      }])
  }
})
describe('MyCarMaintenanceProject.vue', () => {
  it('should ', async function () {
    const wrapper = mount(MyCarMaintenanceProject)
    await flushPromises()
    console.log(wrapper.vm.projects)
    expect(wrapper.vm.projects.length).toBe(1)
  })
})
