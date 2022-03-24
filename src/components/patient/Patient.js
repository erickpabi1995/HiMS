import React, { useState, useEffect } from 'react'
import { CRow } from '@coreui/react'
import List from './List'
import DataService from '../../services/DataService'
import UserProfile from 'src/services/UserProfile'

const Patient = () => {
  const API_URL_USER = 'user/'
  const API_URL_GROUP = 'group/'
  const API_URL_PATIENT = 'patient/'
  const API_URL_FACILITY = 'facility/'
  const API_URL_ITEM = 'select_item/'

  const [items, setItems] = useState([{}])
  const [newUser, setNewUser] = useState([{}])

  const [newPatient, setNewPatient] = useState([{}])

  const [user_id, setUserId] = useState(0)
  const [patient_id, setPatientID] = useState(0)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  //use state for dropdown List
  const [selectItemList, setSelectItemList] = useState([{}])
  const [facilityList, setFacilityList] = useState([{}])
  const [groupList, setGroupList] = useState([{}])
  const [defaultGroup, setDefaultGroup] = useState([{}])

  const getDetail = (val) => {
    let selectedPatient = items.find((item) => item.id === val)
    setNewPatient(selectedPatient)
    setPatientID(selectedPatient.id)

    setNewUser(selectedPatient.user)
  }

  const handleCreateEdit = (val, selected_id) => {
    //reset all the values
    setNewPatient([{}])
    setPatientID([{}])
    setNewUser([{}])

    if (val && selected_id > 0) {
      getDetail(selected_id)
    }

    setShowCreateForm(val)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (patient_id > 0) {
        let updateUser = {
          facility: newUser.facility,
          group: newUser.group,
          username: newUser.username,
          first_name: newUser.first_name,
          middle_name: newUser.middle_name,
          last_name: newUser.last_name,
          date_of_birth: newUser.date_of_birth,
          gender: newUser.gender,
          email: newUser.email,
          nationality: newUser.nationality,
          national_id: newUser.national_id,
          primary_phone: newUser.primary_phone,
          secondary_phone: newUser.secondary_phone,
          photo_url: newUser.photo_url,
          password: newUser.password,
          created_by: newUser.created_by,
        }

        let updatePatient = {
          title: newPatient.title,
          marital_status: newPatient.marital_status,
          occupation: newPatient.occupation,
          contact_name: newPatient.contact_name,
          contact_phone: newPatient.contact_phone,
          contact_email: newPatient.contact_email,
          resident_address: newPatient.resident_address,
          religion: newPatient.religion,
          user: updateUser,
        }

        await DataService.updateItem(API_URL_PATIENT, newPatient.id, updatePatient)
          .then((res) => {
            let result = res.data
            let filteredList = items.filter((user) => user.id !== user_id)
            const newUserList = [result, ...filteredList]
            setItems(newUserList)
          })
          .catch((err) => {
            alert(err.message)
          })
      } else {
        let user = {
          ...newUser,
          group: defaultGroup.id,
          created_by: UserProfile.getUserId(),
        }

        let postPatient = {
          ...newPatient,
          user,
        }
        console.log(postPatient)
        await DataService.createItem(API_URL_PATIENT, postPatient)
          .then((res) => {
            let result = res.data
            setUserId(result.id)
            const newUserList = [result, ...items]
            setItems(newUserList)
          })
          .catch((err) => {
            alert(err.message)
          })
      }

      setNewUser([{}])

      setNewPatient([{}])

      setUserId(0)
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
    let selectedPatient = items.find((item) => item.id === val)
    DataService.deleteItem(API_URL_USER, selectedPatient.user.id)
      .then((res) => {
        let newUserList = items.filter((user) => user.id !== val)
        setItems(newUserList)
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  const getItemsList = () => {
    DataService.getItemList(API_URL_PATIENT).then((res) => {
      setItems(res.data)
    })
  }

  const getISelectItemList = () => {
    DataService.getSelectItemList(API_URL_ITEM).then((res) => {
      setSelectItemList(res.data)
    })

    DataService.getSelectItemList(API_URL_GROUP).then((res) => {
      let result = res.data
      setGroupList(result)
      let defGroup = result.find((item) => item.default === true)
      setDefaultGroup(defGroup)
    })

    DataService.getSelectItemList(API_URL_FACILITY).then((res) => {
      setFacilityList(res.data)
    })
  }

  useEffect(() => {
    setNewUser([{}])
    setNewPatient([{}])
    setShowDetail(false)
    getItemsList()
    getISelectItemList()

    // let dbDefaultGroup = groupList.find((item) => item.default === 'true')
    // setDefaultGroup(dbDefaultGroup)
  }, [])

  return (
    <CRow>
      <List
        items={items}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        newUser={newUser}
        setNewUser={setNewUser}
        newPatient={newPatient}
        setNewPatient={setNewPatient}
        showCreateForm={showCreateForm}
        handleCreateEdit={handleCreateEdit}
        showDetail={showDetail}
        handleDetail={handleDetail}
        groupList={groupList}
        defaultGroup={defaultGroup}
        selectItemList={selectItemList}
        facilityList={facilityList}
      />
    </CRow>
  )
}

export default Patient
