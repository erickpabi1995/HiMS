import React, { useState, useEffect } from 'react'
import { CRow } from '@coreui/react'

import List from './List'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const GroupService = () => {
  const API_URL = 'group_service/'
  const API_URL_TYPE = 'group/'
  const API_URL_SERVICE = 'service_type/'

  const [items, setItems] = useState([{}])
  const [newItem, setNewItem] = useState([{}])

  const [id, setId] = useState(0)
  const [showCreateForm, setShowCreateForm] = useState(false)

  //use state for dropdown List
  const [selectItemList, setSelectItemList] = useState([{}])
  const [serviceList, setServiceList] = useState([{}])

  const getDetail = (val) => {
    let selectedItem = items.find((item) => item.id === val)
    setNewItem(selectedItem)
    setId(selectedItem.id)
  }

  const handleCreateEdit = (val, selected_id) => {
    //reset all selected values
    setNewItem([{}])

    setShowCreateForm(val)
    if (val && selected_id > 0) {
      getDetail(selected_id)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      if (id === 0) {
        let postItem = {
          ...newItem,
          created_by: UserProfile.getUserId(),
        }

        DataService.createItem(API_URL, postItem)
          .then((res) => {
            let result = res.data
            const newItemList = [result, ...items]
            setItems(newItemList)
          })
          .catch((err) => {
            alert(err.message)
          })
      } else {
        let updateItem = {
          group: newItem.group,
          service_type: newItem.service_type,
          created_by: newItem.created_by,
        }

        DataService.updateItem(API_URL, id, updateItem)
          .then((res) => {
            let result = res.data
            let filteredList = items.filter((user) => user.id !== id)
            const newItemList = [result, ...filteredList]
            setItems(newItemList)
          })
          .catch((err) => {
            alert(err.message)
          })
      }

      setNewItem([{}])
      setId(0)
      setShowCreateForm(false)
    } catch (error) {
      alert(error.message)
    }
  }

  const handleDelete = (val) => {
    DataService.deleteItem(API_URL, val)
      .then((res) => {
        let newItemList = items.filter((user) => user.id !== val)
        setItems(newItemList)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  const getItemsList = () => {
    DataService.getItemList(API_URL).then((res) => {
      setItems(res.data)
    })
  }

  const getISelectItemList = () => {
    DataService.getSelectItemList(API_URL_TYPE).then((res) => {
      setSelectItemList(res.data)
    })

    DataService.getSelectItemList(API_URL_SERVICE).then((res) => {
      setServiceList(res.data)
    })
  }

  useEffect(() => {
    setNewItem([{}])
    getItemsList()
    getISelectItemList()
  }, [])

  return (
    <CRow>
      <List
        items={items}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        newItem={newItem}
        setNewItem={setNewItem}
        showCreateForm={showCreateForm}
        handleCreateEdit={handleCreateEdit}
        selectItemList={selectItemList}
        serviceList={serviceList}
      />
    </CRow>
  )
}

export default GroupService
