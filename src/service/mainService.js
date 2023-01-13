import axios from 'axios'

const { REACT_APP_BASE_URL: url } = process.env

export default class MainService {
  static async getAll() {
    return await axios.get(url)
  }
  static async getNote(id) {
    return await axios.get(`${url}${id}`)
  }
  static async update(id, changedData) {
    return await axios.put(`${url}${id}`, changedData)
  }
  static async create(newData) {
    return await axios.post(url, newData)
  }
  static async delete(id) {
    return await axios.delete(`${url}${id}`)
  }
}
