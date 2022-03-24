import React, { useState, useEffect } from 'react'
import List from './List'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const User = () => {
  const API_URL = 'user/'
  const API_URL_GROUP = 'group/'
  const API_URL_ITEM = 'select_item/'
  const API_URL_FACILITY = 'facility/'

  const [items, setItems] = useState([{}])
  const [newItem, setNewItem] = useState([
    {
      facility: '',
      group: '',
      username: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      date_of_birth: '',
      gender: '',
      email: '',
      nationality: '',
      nationality_ID: '',
      marital_status: '',
      primary_phone: '',
      secondary_phone: '',
      photo_url: '',
      password: '',
      created_by: '',
    },
  ])

  const [id, setId] = useState(0)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  //use state for dropdown List
  const [selectItemList, setSelectItemList] = useState([{}])
  const [facilityList, setFacilityList] = useState([{}])
  const [groupList, setGroupList] = useState([{}])

  const getDetail = (val) => {
    let selectedItem = items.find((item) => item.id === val)
    // console.log(selectedItem)
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

    try {
      if (id === 0) {
        // console.log('before post')
        let postItem = {
          ...newItem,
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
          facility: newItem.facility,
          username: newItem.username,
          first_name: newItem.first_name,
          middle_name: newItem.middle_name,
          last_name: newItem.last_name,
          date_of_birth: newItem.date_of_birth,
          gender: newItem.gender,
          email: newItem.email,
          nationality: newItem.nationality,
          national_id: newItem.national_id,
          marital_status: newItem.marital_status,
          primary_phone: newItem.primary_phone,
          secondary_phone: newItem.secondary_phone,
          photo_url: newItem.photo_url,
          password: newItem.password,
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
      // console.log(res.data)
      setItems(res.data)
    })
  }

  const getISelectItemList = () => {
    DataService.getSelectItemList(API_URL_GROUP).then((res) => {
      // console.log('Select Item')
      console.log(res.data)
      setGroupList(res.data)
    })
    DataService.getSelectItemList(API_URL_ITEM).then((res) => {
      // console.log('Select Item')
      // console.log(res.data)
      setSelectItemList(res.data)
    })

    DataService.getSelectItemList(API_URL_FACILITY).then((res) => {
      // console.log('facility')
      // console.log(res.data)
      setFacilityList(res.data)
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
        groupList={groupList}
        selectItemList={selectItemList}
        facilityList={facilityList}
      />
    </>
  )
}

export default User
