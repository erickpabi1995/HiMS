import React from 'react'
import {
  CRow,
  CCol,
  CFormFloating,
  CFormInput,
  CFormSelect,
  CFormLabel,
  CFormFeedback,
} from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newItem, setNewItem, selectItemList }) => {
  return (
    <main>
      <CRow className="mb-3">
        <CCol md={8} sm={12}>
          <CRow>
            <CCol xs={8} md={8}>
              <CFormFloating>
                <CFormInput
                  id="weight"
                  name="weight"
                  type="number"
                  size="sm"
                  step=".1"
                  required
                  value={newItem.weight}
                  onChange={(e) => setNewItem({ ...newItem, weight: e.target.value })}
                ></CFormInput>
                <CFormLabel className="" htmlFor="weight">
                  Weight *
                </CFormLabel>
                <CFormFeedback invalid>Please provide the weight.</CFormFeedback>
              </CFormFloating>
            </CCol>
            <CCol xs={4} md={4}>
              <CFormFloating>
                <CFormSelect
                  id="weight_unit"
                  name="weight_unit"
                  required
                  value={newItem.weight_unit}
                  onChange={(e) => setNewItem({ ...newItem, weight_unit: e.target.value })}
                >
                  <option value="">...choose...</option>
                  <option value="kg">Kilo Gram (Kg)</option>
                  <option value="lbs">Pound (lbs)</option>
                </CFormSelect>
                <CFormLabel className="" htmlFor="weight_unit">
                  Weight Unit *
                </CFormLabel>
                <CFormFeedback invalid>Please select the weight unit.</CFormFeedback>
              </CFormFloating>
            </CCol>
          </CRow>

          <br />
        </CCol>

        <CCol md={8} sm={12}>
          <CRow>
            <CCol xs={8} md={8}>
              <CFormFloating>
                <CFormInput
                  id="height"
                  name="height"
                  type="number"
                  size="sm"
                  step=".1"
                  required
                  value={newItem.height}
                  onChange={(e) => setNewItem({ ...newItem, height: e.target.value })}
                ></CFormInput>
                <CFormLabel className="" htmlFor="height">
                  Height *
                </CFormLabel>
                <CFormFeedback invalid>Please provide the height.</CFormFeedback>
              </CFormFloating>
            </CCol>
            <CCol xs={4} md={4}>
              <CFormFloating>
                <CFormSelect
                  id="height_unit"
                  name="height_unit"
                  required
                  value={newItem.height_unit}
                  onChange={(e) => setNewItem({ ...newItem, height_unit: e.target.value })}
                >
                  <option value="">...choose...</option>
                  <option value="cm">Centimeter (cm)</option>
                  <option value="m">Meter (m)</option>
                  <option value="inc">Inch (inc)</option>
                  <option value="ft">Foot (ft)</option>
                </CFormSelect>
                <CFormLabel className="" htmlFor="height_unit">
                  Height Unit *
                </CFormLabel>
                <CFormFeedback invalid>Please select the height unit.</CFormFeedback>
              </CFormFloating>
            </CCol>
          </CRow>

          <br />
        </CCol>

        <CCol md={8} sm={12}>
          <CRow>
            <CCol xs={8} md={8}>
              <CFormFloating>
                <CFormInput
                  id="temperature"
                  name="temperature"
                  type="number"
                  size="sm"
                  step=".1"
                  required
                  value={newItem.temperature}
                  onChange={(e) => setNewItem({ ...newItem, temperature: e.target.value })}
                ></CFormInput>
                <CFormLabel className="" htmlFor="temperature">
                  Temperature *
                </CFormLabel>
                <CFormFeedback invalid>Please provide the temperature.</CFormFeedback>
              </CFormFloating>
            </CCol>
            <CCol xs={4} md={4}>
              <CFormFloating>
                <CFormSelect
                  id="temperature_unit"
                  name="temperature_unit"
                  required
                  value={newItem.temperature_unit}
                  onChange={(e) => setNewItem({ ...newItem, temperature_unit: e.target.value })}
                >
                  <option value="">...choose...</option>
                  <option value="F">Degree Fahrenheit (0 F)</option>
                  <option value="C">Degree Celsius (0 C) </option>
                </CFormSelect>
                <CFormLabel className="" htmlFor="temperature_unit">
                  Temp. Unit *
                </CFormLabel>
                <CFormFeedback invalid>Please select the temperature unit.</CFormFeedback>
              </CFormFloating>
            </CCol>
          </CRow>

          <br />
        </CCol>

        <CCol md={8} sm={12}>
          <CRow>
            <CCol xs={8} md={8}>
              <CFormFloating>
                <CFormInput
                  id="pressure"
                  name="pressure"
                  type="number"
                  size="sm"
                  step=".1"
                  required
                  value={newItem.pressure}
                  onChange={(e) => setNewItem({ ...newItem, pressure: e.target.value })}
                ></CFormInput>
                <CFormLabel className="" htmlFor="pressure">
                  Blood Pressure *
                </CFormLabel>
                <CFormFeedback invalid>Please provide the blood Pressure.</CFormFeedback>
              </CFormFloating>
            </CCol>
            <CCol xs={4} md={4}>
              <CFormFloating>
                <CFormSelect
                  id="pressure_unit"
                  name="pressure_unit"
                  required
                  value={newItem.pressure_unit}
                  onChange={(e) => setNewItem({ ...newItem, pressure_unit: e.target.value })}
                >
                  <option value="">...choose...</option>
                  <option value="bp">BP</option>
                  <option value="unit">[unit]</option>
                </CFormSelect>
                <CFormLabel className="" htmlFor="pressure_unit">
                  Pressure Unit *
                </CFormLabel>
                <CFormFeedback invalid>Please select the blood pressure unit.</CFormFeedback>
              </CFormFloating>
            </CCol>
          </CRow>

          <br />
        </CCol>

        <CCol md={8} sm={12}>
          <CRow>
            <CFormFloating>
              <CFormInput
                id="note"
                name="note"
                type="text"
                value={newItem.note}
                onChange={(e) => setNewItem({ ...newItem, note: e.target.value })}
              ></CFormInput>
              <CFormLabel className="" htmlFor="note">
                Note
              </CFormLabel>
            </CFormFloating>
          </CRow>

          <br />
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
