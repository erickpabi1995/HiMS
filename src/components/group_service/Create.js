import React from 'react'
import {
  CCol,
  CFormInput,
  CFormFloating,
  CFormLabel,
  CRow,
  CFormSelect,
  CFormFeedback,
} from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newItem, setNewItem, selectItemList, serviceList }) => {
  return (
    <CRow>
      <CRow className="mb-3">
        <CCol md={12}>
          <CFormFloating>
            <CFormSelect
              id="group"
              name="group"
              required
              value={newItem.group}
              onChange={(e) => setNewItem({ ...newItem, group: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="group">
              Group
            </CFormLabel>
            <CFormFeedback invalid>Please select the group.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="service_type"
              name="service_type"
              required
              value={newItem.service_type}
              onChange={(e) => setNewItem({ ...newItem, service_type: e.target.value })}
            >
              <option value="">...choose...</option>

              {serviceList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="service_type">
              Service Type
            </CFormLabel>
            <CFormFeedback invalid>Please provide the service type.</CFormFeedback>
          </CFormFloating>
          <br />
        </CCol>
      </CRow>
    </CRow>
  )
}

export default Create

Create.propTypes = {
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
  selectItemList: PropTypes.array.isRequired,
  serviceList: PropTypes.array.isRequired,
}
