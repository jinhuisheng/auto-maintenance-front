import axios from 'axios'

export function getMaintenanceProjects () {
  return axios.get('http://localhost:8038/say/hello')
}
