import React, { useState } from 'react'

import UserProfile from '../../services/UserProfile'

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

const RegisterModal = ({
  showModal,
  handleModal,
  handleSubmitRegistration,
  newRegister,
  setNewRegister,
  workFlowServiceList,
}) => {
  const [validated, setValidated] = useState(false)
  const handleValidation = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      handleSubmitRegistration(event)
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
            <CModalTitle>New Registration</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Create
              newRegister={newRegister}
              setNewRegister={setNewRegister}
              workFlowServiceList={workFlowServiceList}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => handleModal(false)}>
              Close
            </CButton>
            <CButton type="submit" color="primary">
              Register Patient
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </CRow>
  )
}

export default RegisterModal

RegisterModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  handleSubmitRegistration: PropTypes.func.isRequired,
  newRegister: PropTypes.array.isRequired,
  setNewRegister: PropTypes.func.isRequired,
  workFlowServiceList: PropTypes.array.isRequired,
}
