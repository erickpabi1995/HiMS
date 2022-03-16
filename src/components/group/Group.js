import React, { useState, useEffect } from 'react'
import { CRow } from '@coreui/react'

import List from './List'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const Group = () => {
  const API_URL = 'group/'

  const [items, setItems] = useState([{}])
  const [newItem, setNewItem] = useState([{}])

  const [id, setId] = useState(0)
  const [showCreateForm, setShowCreateForm] = useState(false)

  const getDetail = (val) => {
    let selectedItem = items.find((item) => item.id === val)
    setNewItem(selectedItem)
    setId(selectedItem.id)
  }

  const handleCreateEdit = (val, selected_id) => {
    //reset any selected values
    setNewItem([{}])

    setShowCreateForm(val)
    if (val && selected_id > 0) {
      getDetail(selected_id)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // alert('submitted')
    try {
      if (id === 0) {
        // alert(newItem.default)
        let postItem = {
          ...newItem,
          default: newItem.default ? true : false,
          created_by: UserProfile.getUserId(),
        }
        console.log(postItem)
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
        // alert(newItem.default)
        let updateItem = {
          name: newItem.name,
          default: newItem.default,
          status: newItem.status,
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

  useEffect(() => {
    setNewItem([{}])
    getItemsList()
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
      />
    </CRow>
  )
}

export default Group
