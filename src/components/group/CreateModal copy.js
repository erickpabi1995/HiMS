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

const CreateModal = ({ newItem, setNewItem, showCreateForm, handleCreateEdit, handleSubmit }) => {
  return (
    <CRow>
      <CForm>
        <CModal backdrop="static" visible={showCreateForm} onClose={() => handleCreateEdit(false)}>
          <CModalHeader>
            <CModalTitle>New Group</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Create newItem={newItem} setNewItem={setNewItem} />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => handleCreateEdit(false)}>
              Close
            </CButton>
            <CButton type="submit" color="primary" onClick={(e) => handleSubmit(e)}>
              Save changes
            </CButton>
          </CModalFooter>
        </CModal>
      </CForm>
    </CRow>
  )
}

export default CreateModal

CreateModal.propTypes = {
  showCreateForm: PropTypes.bool.isRequired,
  handleCreateEdit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
}
