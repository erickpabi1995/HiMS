import React, { useState } from 'react'
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

const VitalModal = ({
  itemDetail,
  showModal,
  handleModal,
  handleSubmitVital,
  newItem,
  setNewItem,
  selectItemList,
}) => {
  const [validated, setValidated] = useState(false)
  const handleValidation = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      handleSubmitVital(event)
    }
    setValidated(true)
  }
  return (
    <CRow>
      <CModal backdrop="static" size="lg" visible={showModal} onClose={() => handleModal(false)}>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleValidation}
        >
          <CModalHeader>
            <CModalTitle>
              Vital Signs for {itemDetail.patient_title} {itemDetail.patient_name}
            </CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Create newItem={newItem} setNewItem={setNewItem} selectItemList={selectItemList} />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => handleModal(false)}>
              Close
            </CButton>
            <CButton type="submit" color="primary">
              Save changes
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </CRow>
  )
}

export default VitalModal

VitalModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  itemDetail: PropTypes.object.isRequired,
  handleModal: PropTypes.func.isRequired,
  handleSubmitVital: PropTypes.func.isRequired,
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
  // newPatient: PropTypes.array.isRequired,
  // setNewPatient: PropTypes.func.isRequired,
  selectItemList: PropTypes.array.isRequired,
  // facilityList: PropTypes.array.isRequired,
}
