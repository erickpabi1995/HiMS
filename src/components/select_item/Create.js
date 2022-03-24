import React from 'react'
import {
  CCol,
  CFormInput,
  CFormLabel,
  CFormFloating,
  CRow,
  CFormSelect,
  CFormFeedback,
} from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newItem, setNewItem, selectItemList }) => {
  let type_list = [
    'NATIONALITY',
    'REGION',
    'DISTRICT',
    'TOWN',
    'OCCUPATION',
    'RELIGION',
    'TITLE',
    'GENDER',
    'MARITAL_STATUS',
    'STAFF_TYPE',
    'FACILITY_CATEGORY',
  ]
  return (
    <CRow>
      <CRow className="mb-3">
        <CCol md={12}>
          <CFormFloating>
            <CFormSelect
              id="type"
              required
              value={newItem.type}
              onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
            >
              <option value="">...choose...</option>

              {type_list.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="category">
              Type *
            </CFormLabel>
            <CFormFeedback invalid>Please select the type.</CFormFeedback>
          </CFormFloating>

          <br />

          <CFormFloating>
            <CFormInput
              id="value"
              required
              value={newItem.value}
              onChange={(e) => setNewItem({ ...newItem, value: e.target.value })}
            />
            <CFormLabel htmlFor="value">Value</CFormLabel>
            <CFormFeedback invalid>Please provide the item value.</CFormFeedback>
          </CFormFloating>

          <br />

          <CFormFloating>
            <CFormInput
              id="text"
              required
              value={newItem.text}
              onChange={(e) => setNewItem({ ...newItem, text: e.target.value })}
            />
            <CFormLabel htmlFor="text">Label</CFormLabel>
            <CFormFeedback invalid>Please provide the item label.</CFormFeedback>
          </CFormFloating>

          <br />
          <CFormFloating>
            <CFormSelect
              id="parent"
              name="parent"
              value={newItem.parent}
              onChange={(e) => setNewItem({ ...newItem, parent: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.text}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="parent">
              Parent Item
            </CFormLabel>
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
}
