import React, { useState, useEffect } from 'react'
import List from './List'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const Workflow = (url) => {
  const API_URL = 'workflow/'
  const API_URL_SERVICE = 'workflow_service/'
  const API_URL_GROUP = 'group/'

  const [items, setItems] = useState([{}])
  const [newItem, setNewItem] = useState([
    {
      transaction_type: '',
      group: '',
      access_level: '',
      created_by: '',
    },
  ])

  const [id, setId] = useState(0)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  //use state for dropdown List
  const [groupList, setGroupList] = useState([{}])
  const [workFlowServiceList, setWorkFlowServiceList] = useState([{}])

  const getDetail = (val) => {
    let selectedItem = items.find((item) => item.id === val)
    setNewItem(selectedItem)
    setId(selectedItem.id)
  }

  const handleCreateEdit = (val, selected_id) => {
    // console.log(newItem)
    setShowCreateForm(val)
    if (val && selected_id > 0) {
      getDetail(selected_id)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (id === 0) {
        let postItem = {
          ...newItem,
          created_by: UserProfile.getUserId(),
        }
        // console.log('user')
        console.log(postItem)
        await DataService.createItem(API_URL, postItem)
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
          service: newItem.service,
          group: newItem.group,
          access_level: newItem.access_level,
          created_by: newItem.created_by,
        }
        console.log(updateItem)
        await DataService.updateItem(API_URL, id, updateItem)
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

      setNewItem([])
      setId(0)
      setShowCreateForm(false)
    } catch (error) {
      alert(error.message)
    }
  }

  const handleDetail = (val, selected_id) => {
    if (val && selected_id > 0) {
      getDetail(selected_id)
    }
    setShowDetail(val)
  }

  const handleDelete = async (val) => {
    await DataService.deleteItem(API_URL, val)
      .then((res) => {
        let newItemList = items.filter((user) => user.id !== val)
        setItems(newItemList)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  const getItemsList = async () => {
    await DataService.getItemList(API_URL).then((res) => {
      // console.log(res.data)
      setItems(res.data)
    })
  }

  const getISelectItemList = async () => {
    await DataService.getSelectItemList(API_URL_GROUP).then((res) => {
      setGroupList(res.data)
    })
    await DataService.getSelectItemList(API_URL_SERVICE).then((res) => {
      setWorkFlowServiceList(res.data)
    })
  }

  useEffect(() => {
    setNewItem([])
    getItemsList()
    getISelectItemList()
  }, [])

  return (
    <>
      <List
        items={items}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        newItem={newItem}
        setNewItem={setNewItem}
        showCreateForm={showCreateForm}
        handleCreateEdit={handleCreateEdit}
        showDetail={showDetail}
        handleDetail={handleDetail}
        workFlowServiceList={workFlowServiceList}
        groupList={groupList}
      />
    </>
  )
}

export default Workflow
