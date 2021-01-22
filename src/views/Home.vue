<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyCarMaintenanceProject msg="Welcome to Your Vue.js App"/>
      <table>
          <tr>
            <td></td>
          </tr>
          <tr>
              <td></td>
          </tr>
      </table>
  </div>
</template>

<script>
// @ is an alias to /src
import MyCarMaintenanceProject from '@/components/MyCarMaintenanceProject.vue'

export default {
  name: 'Home',
  components: {
    MyCarMaintenanceProject
  }
}
</script>
