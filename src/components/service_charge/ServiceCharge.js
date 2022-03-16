import React, { useState, useEffect } from 'react'
import List from './List'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const ServiceCharge = () => {
  const API_URL = 'service_charge/'
  const API_URL_TYPE = 'currency_type/'
  const API_URL_SERVICE = 'workflow_service/'

  const [items, setItems] = useState([{}])
  const [newItem, setNewItem] = useState([{}])

  const [id, setId] = useState(0)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  //use state for dropdown List
  const [selectItemList, setSelectItemList] = useState([{}])
  const [serviceList, setServiceList] = useState([{}])

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

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('no user')
    // console.log(newItem)

    try {
      if (id === 0) {
        let postItem = {
          ...newItem,
          in_workflow: newItem.in_workflow === undefined ? false : true,
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
        let updateItem = {
          service: newItem.service,
          amount: newItem.amount,
          currency_type: newItem.currency_type,
          created_by: newItem.created_by,
        }

        // console.log(updateItem)
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

  const handleDetail = (val, selected_id) => {
    if (val && selected_id > 0) {
      getDetail(selected_id)
    }
    setShowDetail(val)
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
      console.log(res.data)
      setItems(res.data)
    })
  }

  const getISelectItemList = () => {
    DataService.getSelectItemList(API_URL_TYPE).then((res) => {
      // console.log('Select Item')
      // console.log(res.data)
      setSelectItemList(res.data)
    })

    DataService.getSelectItemList(API_URL_SERVICE).then((res) => {
      // console.log('Select Item')
      // console.log(res.data)
      setServiceList(res.data)
    })
  }

  useEffect(() => {
    setNewItem([{}])
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
        selectItemList={selectItemList}
        serviceList={serviceList}
      />
    </>
  )
}

export default ServiceCharge
