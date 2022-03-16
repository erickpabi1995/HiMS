import React from 'react'
import { CCol, CFormFloating, CFormLabel, CRow, CFormSelect, CFormFeedback } from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newItem, setNewItem, workFlowServiceList, groupList }) => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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

              {workFlowServiceList.map((item) => (
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
            <CFormSelect
              id="group"
              name="group"
              required
              value={newItem.group}
              onChange={(e) => setNewItem({ ...newItem, group: e.target.value })}
            >
              <option value="">...choose...</option>

              {groupList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="group">
              Group Name *
            </CFormLabel>
            <CFormFeedback invalid>Please select the group.</CFormFeedback>
          </CFormFloating>

          <br />
          <CFormFloating>
            <CFormSelect
              id="access_level"
              name="access_level"
              required
              value={newItem.access_level}
              onChange={(e) => setNewItem({ ...newItem, access_level: e.target.value })}
            >
              <option value="">...choose...</option>
              {num.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="access_level">
              Access Level *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the access level.</CFormFeedback>
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
  workFlowServiceList: PropTypes.array.isRequired,
  groupList: PropTypes.array.isRequired,
}
