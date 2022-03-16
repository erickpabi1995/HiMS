import React, { useState, useEffect } from 'react'
import List from './List'
import Detail from './Detail'
import WidgetsDropdown from './WidgetsDropdown'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const Attendance = () => {
  const API_URL = 'patient/'
  const API_URL_SERVICE = 'registration_service/'
  const API_URL_ITEM = 'select_item/'

  const [items, setItems] = useState([{}])
  const [itemDetail, setItemDetail] = useState([{}])
  const [selectItemList, setSelectItemList] = useState([{}])
  const [workFlowServiceList, setWorkFlowServiceList] = useState([{}])

  const [showList, setShowList] = useState(true)
  const [showDetail, setShowDetail] = useState(false)

  const getDetail = (val) => {
    let selectedDetail = items.find((item) => item.id === val)
    console.log(selectedDetail)
    setItemDetail(selectedDetail)
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
    DataService.getSelectItemList(API_URL_SERVICE).then((res) => {
      setWorkFlowServiceList(res.data)
    })
  }
  const handleList = (val) => {
    setShowList(val)
    setShowDetail(!val)
  }

  const handleDetail = (val, selected_id) => {
    // alert(selected_id)
    if (val && selected_id > 0) {
      // alert(val)
      getDetail(selected_id)
    }
    setShowDetail(val)
    setShowList(!val)
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
              itemDetail={itemDetail}
              selectItemList={selectItemList}
              workFlowServiceList={workFlowServiceList}
              handleDetail={handleDetail}
              handleList={handleList}
            />
          )
        }
      })()}
    </>
  )
}

export default Attendance
