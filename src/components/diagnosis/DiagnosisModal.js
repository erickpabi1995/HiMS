import React from 'react'
import {
  CButton,
  CForm,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import PropTypes from 'prop-types'
import Create from './Create'

const DiagnosisModal = ({
  showModal,
  handleModal,
  handleSubmitRegistration,
  newItem,
  setNewItem,
  selectItemList,
}) => {
  return (
    <CRow>
      <CForm>
        <CModal backdrop="static" size="xl" visible={showModal} onClose={() => handleModal(false)}>
          <CModalHeader>
            <CModalTitle>Diagnosis</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Create newItem={newItem} setNewItem={setNewItem} selectItemList={selectItemList} />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => handleModal(false)}>
              Close
            </CButton>
            <CButton type="submit" color="primary" onClick={(e) => handleSubmitRegistration(e)}>
              Save changes
            </CButton>
          </CModalFooter>
        </CModal>
      </CForm>
    </CRow>
  )
}

export default DiagnosisModal

DiagnosisModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  // showCreateForm: PropTypes.bool.isRequired,
  // handleModal: PropTypes.func.isRequired,
  handleModal: PropTypes.func.isRequired,
  handleSubmitRegistration: PropTypes.func.isRequired,
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
  // newPatient: PropTypes.array.isRequired,
  // setNewPatient: PropTypes.func.isRequired,
  selectItemList: PropTypes.array.isRequired,
  // facilityList: PropTypes.array.isRequired,
}
