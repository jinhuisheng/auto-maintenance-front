<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <table v-if="projects.length>0">
            <thead>
            <tr>
                <td>保养项目</td>
                <td>类型</td>
                <td>保养周期</td>
                <td>最后保养日期</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in projects" :key="item">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.type}}</td>
                <td>{{item.cycle}}</td>
                <td>{{item.lastMaintainDate}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import { getMaintenanceProjects } from '../api/service'

export default {
  name: 'MyCarMaintenanceProject',
  props: {
    msg: String
  },
  data () {
    return {
      projects: []
    }
  },
  async created () {
    this.projects = await getMaintenanceProjects()
    console.log(this.projects)
  },
  mounted () {
    this.msg = '我的爱车保养'
    console.log(this.msg)
  }
}
</script>
