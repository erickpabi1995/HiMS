import React, { useState } from 'react'
import {
  CImage,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import PropTypes from 'prop-types'
import { DocsExample } from 'src/components'
import History from './History'
import Info from './Info'
import Task from './Task'
import RegisterModal from '../register/RegisterModal'
import VitalModal from '../vital/VitalModal'
import DiagnosisModal from '../diagnosis/DiagnosisModal'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const Detail = ({ itemDetail, selectItemList, workFlowServiceList, handleDetail, handleList }) => {
  let API_URL = 'transaction/'
  let API_URL_ACCESS_LEVEL = 'access_level/'
  const [newRegister, setNewRegister] = useState([{}])
  const [newVital, setNewVital] = useState([{}])
  const [newDiagnosis, setNewDiagnosis] = useState([{}])

  const [showModal, setShowModal] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  const handleModal = (index, val) => {
    setModalIndex(index)
    setShowModal(val)
  }

  const handleSubmitRegistration = (e) => {
    e.preventDefault()

    try {
      let url =
        API_URL_ACCESS_LEVEL +
        '?service=' +
        newRegister.service +
        '&group=' +
        UserProfile.getGroup()

      console.log(url)
      DataService.getSelectItemList(url)
        .then((res) => {
          let result = res.data[0]
          // alert(result.id)
          // console.log(result)
          let postItem = {
            ...newRegister,
            patient: itemDetail.id,
            access_level: result.access_level,
            assigned_group: result.group,
            created_by: UserProfile.getUserId(),
          }
          console.log(postItem)
          DataService.createItem(API_URL, postItem)
            .then((res) => {
              let result = res.data
              // alert('Successfully registered.')
              handleModal(false)
            })
            .catch((err) => {
              alert(err.message)
            })
        })
        .catch((err) => {
          alert(err.message)
        })
      // handleModal(false)
    } catch (error) {
      alert(error.message)
    }
  }
  const handleSubmitVital = () => {}
  const handleSubmitDiagnosis = () => {}

  return (
    <CRow>
      {(() => {
        switch (modalIndex) {
          case 1:
            return (
              <CRow>
                <RegisterModal
                  showModal={showModal}
                  handleModal={handleModal}
                  handleSubmitRegistration={handleSubmitRegistration}
                  newRegister={newRegister}
                  setNewRegister={setNewRegister}
                  workFlowServiceList={workFlowServiceList}
                />
              </CRow>
            )

          case 2:
            return (
              <CRow>
                <VitalModal
                  showModal={showModal}
                  handleModal={handleModal}
                  handleSubmitRegistration={handleSubmitVital}
                  newItem={newVital}
                  setNewItem={setNewVital}
                  selectItemList={selectItemList}
                />
              </CRow>
            )

          default:
        }
      })()}

      <CRow className="mb-3">
        <CCol md={5}>
          <DocsExample href="components/table#bordered-tables">
            <CTable bordered>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell colSpan={2}>
                    <Info itemDetail={itemDetail} handleList={handleList} />
                    <Task
                      showModal={showModal}
                      handleModal={handleModal}
                      handleDetail={handleDetail}
                    />
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </DocsExample>
        </CCol>

        <CCol md={7}>
          <DocsExample href="components/table#bordered-tables">
            <CTable bordered>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <History />
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </DocsExample>
        </CCol>
      </CRow>
    </CRow>
  )
}

export default Detail

Detail.propTypes = {
  itemDetail: PropTypes.object.isRequired,
  selectItemList: PropTypes.array.isRequired,
  workFlowServiceList: PropTypes.array.isRequired,
  handleDetail: PropTypes.func.isRequired,
  handleList: PropTypes.func.isRequired,
}
