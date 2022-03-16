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

const Create = ({ newItem, setNewItem, groupList, selectItemList, facilityList }) => {
  return (
    <main>
      <CRow className="mb-3">
        <CCol md={4}>
          <CFormFloating>
            <CFormSelect
              id="facility"
              name="facility"
              required
              value={newItem.facility}
              onChange={(e) => setNewItem({ ...newItem, facility: e.target.value })}
            >
              <option value="">...choose...</option>

              {facilityList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="facility">
              Facility *
            </CFormLabel>
            <CFormFeedback invalid>Please select the facility.</CFormFeedback>
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
              Group *
            </CFormLabel>
            <CFormFeedback invalid>Please select the group.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="username"
              name="username"
              type="text"
              required
              value={newItem.username}
              onChange={(e) => setNewItem({ ...newItem, username: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="username">
              Username *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the username.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="first_name"
              name="first_name"
              type="text"
              required
              value={newItem.first_name}
              onChange={(e) => setNewItem({ ...newItem, first_name: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="first_name">
              First Name *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the first name.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="middle_name"
              name="middle_name"
              type="text"
              value={newItem.middle_name}
              onChange={(e) => setNewItem({ ...newItem, middle_name: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="middle_name">
              Middle Name
            </CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={4}>
          <CFormFloating>
            <CFormInput
              id="last_name"
              name="last_name"
              type="text"
              required
              value={newItem.last_name}
              onChange={(e) => setNewItem({ ...newItem, last_name: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="last_name">
              Last Name *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the last name.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="date_of_birth"
              name="date_of_birth"
              type="date"
              required
              value={newItem.date_of_birth}
              onChange={(e) => setNewItem({ ...newItem, date_of_birth: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="date_of_birth">
              Date of Birth *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the date of birth.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="gender"
              name="gender"
              required
              value={newItem.gender}
              onChange={(e) => setNewItem({ ...newItem, gender: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter((selectItem) => selectItem.type === 'gender')
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="gender">
              Gender *
            </CFormLabel>
            <CFormFeedback invalid>Please select the gender.</CFormFeedback>
          </CFormFloating>
          <br />
          <CFormFloating>
            <CFormSelect
              id="nationality"
              name="nationality"
              required
              value={newItem.nationality}
              onChange={(e) => setNewItem({ ...newItem, nationality: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter((selectItem) => selectItem.type === 'nationality')
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="nationality">
              Nationality *
            </CFormLabel>
            <CFormFeedback invalid>Please select the nationality.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="national_id"
              name="national_id"
              type="text"
              value={newItem.national_id}
              onChange={(e) => setNewItem({ ...newItem, national_id: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="national_id">
              National ID
            </CFormLabel>
          </CFormFloating>
        </CCol>

        <CCol md={4}>
          <CFormFloating>
            <CFormInput
              id="email"
              name="email"
              type="email"
              required
              value={newItem.email}
              onChange={(e) => setNewItem({ ...newItem, email: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="email">
              Email Address *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the email address.</CFormFeedback>
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
            <CFormFeedback invalid>Please provide the primary Phone.</CFormFeedback>
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
              id="password"
              name="password"
              type="password"
              required
              value={newItem.password}
              onChange={(e) => setNewItem({ ...newItem, password: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="password">
              Password *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the password.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="confirm_password"
              name="confirm_password"
              type="password"
              required
            ></CFormInput>
            <CFormLabel className="" htmlFor="confirm_password">
              Confirm Password *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the password confirmation.</CFormFeedback>
          </CFormFloating>
        </CCol>
      </CRow>
      <CRow>
        <CCol md={12}>
          <CFormFloating>
            <CFormInput
              id="photo_url"
              name="photo_url"
              type="file"
              value={newItem.photo_url}
              onChange={(e) => setNewItem({ ...newItem, photo_url: null })}
            ></CFormInput>
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
  groupList: PropTypes.array.isRequired,
  selectItemList: PropTypes.array.isRequired,
  facilityList: PropTypes.array.isRequired,
}
