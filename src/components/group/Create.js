import React from 'react'
import {
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CRow,
  CFormSwitch,
  CFormFeedback,
} from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newItem, setNewItem }) => {
  return (
    <CRow>
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
            <CFormLabel htmlFor="name">Group Name</CFormLabel>
            <CFormFeedback invalid>Please provide the group name.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSwitch
              label="Default Group"
              id="default"
              name="default"
              value={newItem.default}
              onToggle={(e) => setNewItem({ ...newItem, default: !e.target.value })}
            />
          </CFormFloating>
        </CCol>
      </CRow>
    </CRow>
  )
}

export default Create

Create.propTypes = {
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
}
