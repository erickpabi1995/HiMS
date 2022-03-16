import React from 'react'
import {
  CCol,
  CFormInput,
  CFormFloating,
  CFormLabel,
  CRow,
  CFormSelect,
  CFormSwitch,
  CFormFeedback,
} from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newItem, setNewItem, selectItemList }) => {
  return (
    <main>
      <CRow className="mb-3">
        <CCol md={12}>
          <CFormFloating>
            <CFormSelect
              id="service_type"
              name="service_type"
              required
              value={newItem.service_type}
              onChange={(e) => setNewItem({ ...newItem, service_type: e.target.value })}
            >
              <option value="">...choose...</option>
              {selectItemList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="service_type">
              Service Type *
            </CFormLabel>
            <CFormFeedback invalid>Please select the service type.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="name"
              name="name"
              type="text"
              required
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="name">
              Name *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the service name.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSwitch
              label="In Workflow"
              id="in_workflow"
              name="in_workflow"
              defaultChecked={newItem.in_workflow}
              onChange={(e) => setNewItem({ ...newItem, in_workflow: e.target.value })}
            />
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="description"
              name="description"
              type="text"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="description">
              Description
            </CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
    </main>
  )
}

export default Create

Create.propTypes = {
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
  selectItemList: PropTypes.array.isRequired,
}
