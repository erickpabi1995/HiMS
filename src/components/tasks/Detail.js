import React, { useState } from 'react'
import { CImage, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableRow } from '@coreui/react'
import PropTypes from 'prop-types'
import { DocsExample } from 'src/components'
import History from './History'
import Info from './Info'
import Task from './Task'
import VitalModal from '../vital/VitalModal'
import DiagnosisModal from '../diagnosis/DiagnosisModal'
import DataService from '../../services/DataService'
import UserProfile from '../../services/UserProfile'

const Detail = ({
  newVital,
  setNewVital,
  newDiagnosis,
  itemDetail,
  setNewDiagnosis,
  selectItemList,
  handleList,
  handleSubmit,
  handleSubmitVital,
  patientOwed,
  submitReady,
  modalIndex,
  showModal,
  handleModal,
}) => {
  const handleSubmitDiagnosis = async () => {}

  return (
    <CRow>
      {(() => {
        switch (modalIndex) {
          case 2:
            return (
              <CRow>
                <VitalModal
                  itemDetail={itemDetail}
                  showModal={showModal}
                  handleModal={handleModal}
                  handleSubmitVital={handleSubmitVital}
                  newItem={newVital}
                  setNewItem={setNewVital}
                  selectItemList={selectItemList}
                />
              </CRow>
            )

          case 3:
            return (
              <CRow>
                <DiagnosisModal
                  showModal={showModal}
                  handleModal={handleModal}
                  handleSubmitDiagnosis={handleSubmitDiagnosis}
                  newItem={newDiagnosis}
                  setNewItem={setNewDiagnosis}
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
                    <Info
                      itemDetail={itemDetail}
                      handleList={handleList}
                      patientOwed={patientOwed}
                      handleSubmit={handleSubmit}
                      newVital={newVital}
                      submitReady={submitReady}
                    />
                    <Task showModal={showModal} handleModal={handleModal} />
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
  newVital: PropTypes.array.isRequired,
  setNewVital: PropTypes.func.isRequired,
  newDiagnosis: PropTypes.array.isRequired,
  setNewDiagnosis: PropTypes.func.isRequired,
  itemDetail: PropTypes.object.isRequired,
  selectItemList: PropTypes.array.isRequired,
  transactionTypeList: PropTypes.array.isRequired,
  handleList: PropTypes.func.isRequired,
  patientOwed: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSubmitVital: PropTypes.func.isRequired,
  submitReady: PropTypes.bool.isRequired,
  showModal: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  modalIndex: PropTypes.number.isRequired,
}
