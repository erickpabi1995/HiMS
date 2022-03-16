import React from 'react'
import { CCol, CFormInput, CFormLabel, CFormFloating, CRow, CFormFeedback } from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newItem, setNewItem }) => {
  return (
    <CRow className="mb-3">
      <CCol md={12}>
        <CFormFloating>
          <CFormInput
            id="name"
            required
            placeholder="name of group"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
          <CFormLabel htmlFor="name">Service Name</CFormLabel>
          <CFormFeedback invalid>Please provide the service name.</CFormFeedback>
        </CFormFloating>
      </CCol>
    </CRow>
  )
}

export default Create

Create.propTypes = {
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
}
