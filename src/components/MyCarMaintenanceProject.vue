<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <table>
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
<!--            <tr>-->
<!--                <td>机油</td>-->
<!--                <td>保养</td>-->
<!--                <td>3 天</td>-->
<!--                <td>2020-12-01</td>-->
<!--            </tr>-->
        </table>
    </div>
</template>

<script>
export default {
  name: 'MyCarMaintenanceProject',
  props: {
    msg: String,
    projects: Array
  },
  mounted () {
    this.msg = '我的爱车保养'
    // this.axios.get('').then((response) => {
    //   console.log(response.data)
    // })
    this.projects = [
      {
        name: '机油',
        type: '保养',
        cycle: '3 天',
        lastMaintainDate: '2020-12-01'
      }
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
