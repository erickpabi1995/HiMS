import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:3500/api/'

class DataService {
  getItemList = async (url) => {
    return await axios.get(BASE_URL + url)
  }

  getSelectItemList = async (url) => {
    return await axios.get(BASE_URL + url)
  }

  createItem = async (url, data) => {
    // console.log(url)
    return await axios.post(BASE_URL + url, data)
  }

  getItemById = async (url, dataId) => {
    return await axios.get(BASE_URL + url + dataId)
  }

  updateItem = async (url, dataId, data) => {
    console.log(BASE_URL + url + dataId + '/')
    return await axios.patch(BASE_URL + url + dataId + '/', data)
  }

  deleteItem = async (url, dataId) => {
    return await axios.delete(BASE_URL + url + dataId)
  }
}

export default new DataService()
