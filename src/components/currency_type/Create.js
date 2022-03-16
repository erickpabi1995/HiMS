import React from 'react'
import { CCol, CFormInput, CFormLabel, CFormFloating, CRow, CFormFeedback } from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newItem, setNewItem }) => {
  return (
    <>
      <CRow className="mb-3">
        <CCol md={12}>
          <CFormFloating>
            <CFormInput
              id="name"
              required
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
            <CFormLabel htmlFor="name">Currency Name</CFormLabel>
            <CFormFeedback invalid>Please provide the currency name.</CFormFeedback>
          </CFormFloating>

          <br />

          <CFormFloating>
            <CFormInput
              id="usd_rate"
              type="number"
              step=".5"
              required
              value={newItem.usd_rate}
              onChange={(e) => setNewItem({ ...newItem, usd_rate: e.target.value })}
            />
            <CFormLabel htmlFor="name">USD Rate</CFormLabel>
            <CFormFeedback invalid>Please provide the USD rate.</CFormFeedback>
          </CFormFloating>
        </CCol>
      </CRow>
    </>
  )
}

export default Create

Create.propTypes = {
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
}
