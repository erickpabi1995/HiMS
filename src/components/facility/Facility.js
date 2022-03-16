import React, { useState, useEffect } from 'react'
import List from './List'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const Facility = () => {
  const API_URL = 'facility/'
  const API_URL_ITEM = 'select_item/'

  const [items, setItems] = useState([{}])
  const [newItem, setNewItem] = useState([
    {
      category: '',
      name: '',
      email: '',
      website: '',
      contact_name: '',
      registration_no: '',
      primary_phone: '',
      secondary_phone: '',
      country: '',
      region: '',
      district: '',
      town: '',
      street: '',
      postcode: '',
      digital_address: '',
      logo: '',
      created_by: '',
    },
  ])

  const [id, setId] = useState(0)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  //use state for dropdown List
  const [selectItemList, setSelectItemList] = useState([{}])

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
    try {
      if (id === 0) {
        let postItem = {
          ...newItem,
          logo: newItem.logo ? newItem.logo : null,
          created_by: UserProfile.getGroup(),
        }
        // console.log(postItem)
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
          category: newItem.category,
          name: newItem.name,
          email: newItem.email,
          website: newItem.website,
          contact_name: newItem.contact_name,
          registration_no: newItem.registration_no,
          primary_phone: newItem.primary_phone,
          secondary_phone: newItem.secondary_phone,
          region: newItem.region,
          district: newItem.district,
          town: newItem.town,
          street: newItem.street,
          postcode: newItem.postcode,
          digital_address: newItem.digital_address,
          logo: newItem.logo,
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
    DataService.getSelectItemList(API_URL_ITEM).then((res) => {
      setSelectItemList(res.data)
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
      />
    </>
  )
}

export default Facility
