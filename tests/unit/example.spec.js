import MyCarMaintenanceProject from '@/components/MyCarMaintenanceProject.vue'
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { getxxx } from '../../src/api/index'
import { flushPromises } from '../flushPromises'
jest.mock('../../src/api/index.js', () => {
  return {
    getxxx: jest.fn().mockResolvedValue([
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
