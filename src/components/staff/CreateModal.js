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

const CreateModal = ({
  newUser,
  setNewUser,
  newPatient,
  setNewPatient,
  showCreateForm,
  handleCreateEdit,
  handleSubmit,
  groupList,
  selectItemList,
  facilityList,
}) => {
  const [validated, setValidated] = useState(false)
  const handleValidation = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      handleSubmit(event)
    }
    setValidated(true)
  }
  return (
    <CRow>
      <CModal
        backdrop="static"
        size="xl"
        visible={showCreateForm}
        onClose={() => handleCreateEdit(false)}
      >
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={validated}
          onSubmit={handleValidation}
        >
          <CModalHeader>
            <CModalTitle>New Staff</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Create
              newUser={newUser}
              setNewUser={setNewUser}
              newPatient={newPatient}
              setNewPatient={setNewPatient}
              groupList={groupList}
              selectItemList={selectItemList}
              facilityList={facilityList}
            />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => handleCreateEdit(false)}>
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

export default CreateModal

CreateModal.propTypes = {
  showCreateForm: PropTypes.bool.isRequired,
  handleCreateEdit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newUser: PropTypes.array.isRequired,
  setNewUser: PropTypes.func.isRequired,
  newPatient: PropTypes.array.isRequired,
  setNewPatient: PropTypes.func.isRequired,
  groupList: PropTypes.array.isRequired,
  selectItemList: PropTypes.array.isRequired,
  facilityList: PropTypes.array.isRequired,
}
