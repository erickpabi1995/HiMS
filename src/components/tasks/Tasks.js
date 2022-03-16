import React, { useState, useEffect } from 'react'
import List from './List'
import Detail from './Detail'
import WidgetsDropdown from './WidgetsDropdown'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const Tasks = () => {
  const API_URL = 'my_tasks/'
  const API_URL_TRAN_SUBMIT = 'transaction_submit/'
  let API_URL_VITAL_SIGN = 'vital_sign/'
  let API_URL_VITAL_SIGN_DETAIL = 'vital_sign_detail'
  let API_URL_TRAN_LOG = 'submit_ready'
  const API_URL_TRAN = 'transaction_type/'
  const API_URL_ITEM = 'select_item/'

  const [items, setItems] = useState([{}])
  const [itemDetail, setItemDetail] = useState([{}])
  const [selectItemList, setSelectItemList] = useState([{}])
  const [transaction, setTransaction] = useState([{}])
  const [transactionTypeList, setTransactionTypeList] = useState([{}])
  const [newVital, setNewVital] = useState([{}])
  const [newDiagnosis, setNewDiagnosis] = useState([{}])

  const [showList, setShowList] = useState(true)
  const [showDetail, setShowDetail] = useState(false)
  const [patientOwed, setPatientOwed] = useState(false)
  const [submitReady, setSubmitReady] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [modalIndex, setModalIndex] = useState(0)

  const getDetail = (val) => {
    let selectedDetail = items.find((item) => item.id === val)
    setItemDetail(selectedDetail)
    API_URL_TRAN_LOG =
      API_URL_TRAN_LOG +
      '?trans_id=' +
      selectedDetail.id +
      '&access_level=' +
      selectedDetail.access_level

    API_URL_VITAL_SIGN_DETAIL = API_URL_VITAL_SIGN_DETAIL + '?trans_id=' + selectedDetail.id
  }

  const getItemsList = async () => {
    let url =
      API_URL + '?group=' + UserProfile.getGroup() + '&access_level=' + UserProfile.getAccessLevel()
    console.log(url)
    await DataService.getItemList(url).then((res) => {
      // console.log(res.data)
      setItems(res.data)
    })
  }

  const getVitalDetail = async () => {
    console.log(API_URL_VITAL_SIGN_DETAIL)
    await DataService.getItemList(API_URL_VITAL_SIGN_DETAIL).then((res) => {
      let result = res.data
      if (result.length > 0) {
        setNewVital(result)
      }
    })
  }

  const getISelectItemList = async () => {
    await DataService.getSelectItemList(API_URL_ITEM).then((res) => {
      setSelectItemList(res.data)
    })
    await DataService.getSelectItemList(API_URL_TRAN).then((res) => {
      setTransactionTypeList(res.data)
    })
  }

  const handleList = (val) => {
    setShowList(val)
    setShowDetail(!val)
  }

  const handleModal = (index, val) => {
    setModalIndex(index)
    setShowModal(val)
  }

  const handleSubmit = async (e, trans_id) => {
    e.preventDefault()

    try {
      let postItem = {
        ...transaction,
        transaction_id: trans_id,
        status: 'vital done',
        modified_by: UserProfile.getUserId(),
        action: 'VITAL SIGNS ADDED',
      }
      console.log(postItem)
      await DataService.updateItem(API_URL_TRAN_SUBMIT, trans_id, postItem)
        .then((res) => {
          let result = res.data
          // console.log(result)
          alert('Transaction submitted successfully.')
          setTransaction([{}])
        })
        .catch((err) => {
          alert(err.message)
        })
    } catch (error) {
      alert(error.message)
    }
  }

  const handleSubmitVital = async (e) => {
    e.preventDefault()

    try {
      let postItem = {
        ...newVital,
        created_by: UserProfile.getUserId(),
        transaction: itemDetail.id,
      }
      // console.log(postItem)
      DataService.createItem(API_URL_VITAL_SIGN, postItem)
        .then((res) => {
          let result = res.data

          setNewVital(result)
          handleModal(false)
          setSubmitReady(true)
        })
        .catch((err) => {
          alert(err.message)
        })
    } catch (error) {
      alert(error.message)
    }
  }
  const handleDetail = (val, selected_id) => {
    // alert(selected_id)
    if (val && selected_id > 0) {
      // alert(val)
      getDetail(selected_id)
      handleSubmitReady()
      getVitalDetail()
    }
    setShowDetail(val)
    setShowList(!val)
  }

  const handleSubmitReady = async () => {
    try {
      // submit_ready?trans_id=41&access_level=1

      // console.log(API_URL_TRAN_LOG)
      await DataService.getItemList(API_URL_TRAN_LOG)
        .then((res) => {
          let result = res.data
          if (result.length > 0) {
            setSubmitReady(true)
          } else {
            setSubmitReady(false)
          }
          setTransaction([{}])
        })
        .catch((err) => {
          alert(err.message)
        })
    } catch (err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    UserProfile.setUserName('Fahnsiah')
    setItemDetail([{}])
    setShowList(true)
    setShowDetail(false)
    getItemsList()
    getISelectItemList()
  }, [])

  return (
    <>
      <WidgetsDropdown />
      {(() => {
        if (showList) {
          return (
            <List
              items={items}
              showList={showList}
              handleList={handleList}
              showDetail={showDetail}
              handleDetail={handleDetail}
              selectItemList={selectItemList}
            />
          )
        } else if (showDetail) {
          return (
            <Detail
              items={items}
              setItems={setItems}
              itemDetail={itemDetail}
              selectItemList={selectItemList}
              transactionTypeList={transactionTypeList}
              handleList={handleList}
              patientOwed={patientOwed}
              handleSubmit={handleSubmit}
              handleSubmitVital={handleSubmitVital}
              newVital={newVital}
              setNewVital={setNewVital}
              newDiagnosis={newDiagnosis}
              setNewDiagnosis={setNewDiagnosis}
              submitReady={submitReady}
              modalIndex={modalIndex}
              showModal={showModal}
              handleModal={handleModal}
            />
          )
        }
      })()}
    </>
  )
}

export default Tasks
