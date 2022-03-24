import React, { useState } from 'react'
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

const Create = ({ newItem, setNewItem, selectItemList }) => {
  // const [regionId, setRegionId] = useState(0)
  return (
    <>
      <CRow className="mb-3">
        <CCol md={4}>
          <CFormFloating>
            <CFormSelect
              id="category"
              name="category"
              required
              value={newItem.category}
              onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter((selectItem) => selectItem.type === 'FACILITY_CATEGORY')
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="category">
              Category *
            </CFormLabel>
            <CFormFeedback invalid>Please select the category.</CFormFeedback>
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
            <CFormFeedback invalid>Please provide the facility name.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="email"
              name="email"
              type="email"
              value={newItem.email}
              onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="email">
              Email Address
            </CFormLabel>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="website"
              name="website"
              type="text"
              value={newItem.website}
              onChange={(e) => setNewItem({ ...newItem, website: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="website">
              Website
            </CFormLabel>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="contact_name"
              name="contact_name"
              type="text"
              required
              value={newItem.contact_name}
              onChange={(e) => setNewItem({ ...newItem, contact_name: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="contact_name">
              Contact Name *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the contact name.</CFormFeedback>
          </CFormFloating>
        </CCol>

        <CCol md={4}>
          <CFormFloating>
            <CFormInput
              id="registration_no"
              name="registration_no"
              type="text"
              required
              value={newItem.registration_no}
              onChange={(e) => setNewItem({ ...newItem, registration_no: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="registration_no">
              Registration No. *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the registration number.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="country"
              name="country"
              required
              value={newItem.country}
              onChange={(e) => setNewItem({ ...newItem, country: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter((selectItem) => selectItem.type === 'NATIONALITY')
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="country">
              Country *
            </CFormLabel>
            <CFormFeedback invalid>Please select the country.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="region"
              name="region"
              required
              value={newItem.region}
              onChange={(e) => setNewItem({ ...newItem, region: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter(
                  (selectItem) =>
                    selectItem.type === 'REGION' && selectItem.parent === newItem.country,
                )
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="region">
              Region *
            </CFormLabel>
            <CFormFeedback invalid>Please select the region.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="district"
              name="district"
              required
              value={newItem.district}
              onChange={(e) => setNewItem({ ...newItem, district: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter(
                  (selectItem) =>
                    selectItem.type === 'DISTRICT' && selectItem.parent === newItem.region,
                )
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="district">
              District *
            </CFormLabel>
            <CFormFeedback invalid>Please select the district.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="town"
              name="town"
              required
              value={newItem.town}
              onChange={(e) => setNewItem({ ...newItem, town: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter(
                  (selectItem) =>
                    selectItem.type === 'TOWN' && selectItem.parent === newItem.district,
                )
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="town">
              Town *
            </CFormLabel>
            <CFormFeedback invalid>Please select the town.</CFormFeedback>
          </CFormFloating>
        </CCol>

        <CCol md={4}>
          <CFormFloating>
            <CFormInput
              id="street"
              name="street"
              type="text"
              required
              value={newItem.street}
              onChange={(e) => setNewItem({ ...newItem, street: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="street">
              Street *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the street.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="postcode"
              name="postcode"
              type="text"
              value={newItem.postcode}
              onChange={(e) => setNewItem({ ...newItem, postcode: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="postcode">
              Post Code
            </CFormLabel>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="primary_phone"
              name="primary_phone"
              type="text"
              required
              value={newItem.primary_phone}
              onChange={(e) => setNewItem({ ...newItem, primary_phone: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="primary_phone">
              Primary Phone *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the primary phone.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="secondary_phone"
              name="secondary_phone"
              type="text"
              value={newItem.secondary_phone}
              onChange={(e) => setNewItem({ ...newItem, secondary_phone: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="secondary_phone">
              Secondary Phone
            </CFormLabel>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="digital_address"
              name="digital_address"
              type="text"
              value={newItem.digital_address}
              onChange={(e) => setNewItem({ ...newItem, digital_address: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="digital_address">
              digital_address
            </CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
      <CCol md={12}>
        <CFormFloating>
          <CFormInput
            id="logo"
            name="logo"
            type="file"
            value={newItem.logo}
            onChange={(e) => setNewItem({ ...newItem, logo: null })}
          ></CFormInput>
        </CFormFloating>
      </CCol>
      <CRow></CRow>
    </>
  )
}

export default Create

Create.propTypes = {
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
  selectItemList: PropTypes.array.isRequired,
}
