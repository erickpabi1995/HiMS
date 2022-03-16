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
              id="service"
              name="service"
              required
              value={newItem.service}
              onChange={(e) => setNewItem({ ...newItem, service: e.target.value })}
            >
              <option value="">...choose...</option>

              {serviceList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="service">
              Service *
            </CFormLabel>
            <CFormFeedback invalid>Please select the service.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="amount"
              name="amount"
              type="number"
              step=".5"
              required
              value={newItem.amount}
              onChange={(e) => setNewItem({ ...newItem, amount: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="amount">
              Amount *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the amount.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="currency_type"
              name="currency_type"
              required
              value={newItem.currency_type}
              onChange={(e) => setNewItem({ ...newItem, currency_type: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="currency_type">
              Currency Type *
            </CFormLabel>
            <CFormFeedback invalid>Please select the currency type.</CFormFeedback>
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
  selectItemList: PropTypes.array.isRequired,
  serviceList: PropTypes.array.isRequired,
}
