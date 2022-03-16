import React from 'react'
import {
  CCol,
  CFormFloating,
  CFormLabel,
  CRow,
  CFormSelect,
  CFormTextarea,
  CFormFeedback,
} from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newRegister, setNewRegister, workFlowServiceList }) => {
  return (
    <>
      <CRow className="mb-3">
        <CCol md={12}>
          <CFormFloating>
            <CFormSelect
              id="service "
              name="service "
              required
              value={newRegister.title}
              onChange={(e) => setNewRegister({ ...newRegister, service: e.target.value })}
            >
              <option value="">...choose...</option>

              {workFlowServiceList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="service ">
              Service *
            </CFormLabel>
            <CFormFeedback invalid>Please select the service.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormTextarea
              id="note"
              name="note"
              value={newRegister.note}
              onChange={(e) => setNewRegister({ ...newRegister, note: e.target.value })}
              style={{ rows: 5 }}
            ></CFormTextarea>
            <CFormLabel className="" htmlFor="note">
              Note
            </CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
    </>
  )
}

export default Create

Create.propTypes = {
  newRegister: PropTypes.array.isRequired,
  setNewRegister: PropTypes.func.isRequired,
  workFlowServiceList: PropTypes.array.isRequired,
}
