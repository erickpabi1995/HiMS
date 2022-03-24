import React from 'react'
import {
  CCol,
  CFormInput,
  CFormFloating,
  CFormLabel,
  CRow,
  CFormSelect,
  CFormTextarea,
  CFormFeedback,
} from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({
  newUser,
  setNewUser,
  newPatient,
  setNewPatient,
  groupList,
  defaultGroup,
  selectItemList,
  facilityList,
  confirmPassword,
  setConfirmPassword,
}) => {
  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  const handleUserImage = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    let userItem = {
      ...newUser,
      photo_url: base64.toString(),
    }
    setNewUser(userItem)
  }

  return (
    <CRow>
      <CRow className="mb-3">
        <CCol md={4}>
          <CFormFloating>
            <CFormSelect
              id="group"
              name="group"
              size="sm"
              disabled
              required
              value={newUser.group}
              onChange={(e) => setNewUser({ ...newUser, group: e.target.value })}
            >
              <option value={defaultGroup.id}>{defaultGroup.name}</option>

              {groupList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="group">
              User Group
            </CFormLabel>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="facility"
              name="facility"
              size="sm"
              required
              value={newUser.facility}
              onChange={(e) => setNewUser({ ...newUser, facility: e.target.value })}
            >
              <option value="">...choose...</option>

              {facilityList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="facility">
              Facility
            </CFormLabel>
            <CFormFeedback invalid>Please select the facility.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="title"
              name="title"
              size="sm"
              required
              value={newPatient.title}
              onChange={(e) => setNewPatient({ ...newPatient, title: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter((selectItem) => selectItem.type === 'TITLE')
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="title">
              Title *
            </CFormLabel>
            <CFormFeedback invalid>Please select the title.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="first_name"
              name="first_name"
              type="text"
              size="sm"
              required
              value={newUser.first_name}
              onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="first_name">
              First Name
            </CFormLabel>
            <CFormFeedback invalid>Please provide the first name.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="middle_name"
              name="middle_name"
              type="text"
              value={newUser.middle_name}
              onChange={(e) => setNewUser({ ...newUser, middle_name: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="middle_name">
              Middle Name
            </CFormLabel>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="last_name"
              name="last_name"
              type="text"
              required
              value={newUser.last_name}
              onChange={(e) => setNewUser({ ...newUser, last_name: e.target.value })}
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
              value={newUser.date_of_birth}
              onChange={(e) => setNewUser({ ...newUser, date_of_birth: e.target.value })}
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
              value={newUser.gender}
              onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter((selectItem) => selectItem.type === 'GENDER')
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
        </CCol>

        <CCol md={4}>
          <CFormFloating>
            <CFormSelect
              id="marital_status"
              name="marital_status"
              required
              value={newPatient.gender}
              onChange={(e) => setNewPatient({ ...newPatient, marital_status: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter((selectItem) => selectItem.type === 'MARITAL_STATUS')
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="marital_status">
              Marital Status *
            </CFormLabel>
            <CFormFeedback invalid>Please select the marital status.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="nationality"
              name="nationality"
              required
              value={newUser.nationality}
              onChange={(e) => setNewUser({ ...newUser, nationality: e.target.value })}
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
              value={newUser.national_id}
              onChange={(e) => setNewUser({ ...newUser, national_id: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="national_id">
              National ID
            </CFormLabel>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="occupation"
              name="occupation"
              required
              value={newPatient.gender}
              onChange={(e) => setNewPatient({ ...newPatient, occupation: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter((selectItem) => selectItem.type === 'OCCUPATION')
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="occupation">
              Occupation *
            </CFormLabel>
            <CFormFeedback invalid>Please select the occupation.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="primary_phone"
              name="primary_phone"
              type="text"
              required
              value={newUser.primary_phone}
              onChange={(e) => setNewUser({ ...newUser, primary_phone: e.target.value })}
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
              value={newUser.secondary_phone}
              onChange={(e) => setNewUser({ ...newUser, secondary_phone: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="secondary_phone">
              Secondary Phone
            </CFormLabel>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormSelect
              id="religion"
              name="religion"
              required
              value={newPatient.gender}
              onChange={(e) => setNewPatient({ ...newPatient, religion: e.target.value })}
            >
              <option value="">...choose...</option>

              {selectItemList
                .filter((selectItem) => selectItem.type === 'RELIGION')
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.text}
                  </option>
                ))}
            </CFormSelect>
            <CFormLabel className="" htmlFor="religion">
              Religion *
            </CFormLabel>
            <CFormFeedback invalid>Please select the religion.</CFormFeedback>
          </CFormFloating>

          <br />

          <CFormFloating>
            <CFormTextarea
              id="resident_address"
              name="resident_address"
              rows="3"
              required
              value={newPatient.resident_address}
              onChange={(e) => setNewPatient({ ...newPatient, resident_address: e.target.value })}
            ></CFormTextarea>
            <CFormLabel className="" htmlFor="resident_address">
              Resident Address *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the resident address.</CFormFeedback>
          </CFormFloating>
        </CCol>

        <CCol md={4}>
          <CFormFloating>
            <CFormInput
              id="username"
              name="username"
              type="text"
              required
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="username">
              Username *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the username.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="email"
              name="email"
              type="email"
              required
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="email">
              Email Address *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the email address.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="password"
              name="password"
              type="password"
              required
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></CFormInput>
            <CFormLabel className="" htmlFor="confirm_password">
              Confirm Password *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the password confirmation.</CFormFeedback>
          </CFormFloating>
          <br />
          <CFormFloating>
            <CFormInput
              id="photo_url"
              name="photo_url"
              type="file"
              onChange={(e) => handleUserImage(e)}
            ></CFormInput>
          </CFormFloating>

          <br />

          <CFormFloating>
            <CFormInput
              id="contact_name"
              name="contact_name"
              type="text"
              required
              value={newPatient.contact_name}
              onChange={(e) => setNewPatient({ ...newPatient, contact_name: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="contact_name">
              Contact Name *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the contact name.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="contact_phone"
              name="contact_phone"
              type="text"
              required
              value={newPatient.contact_phone}
              onChange={(e) => setNewPatient({ ...newPatient, contact_phone: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="contact_phone">
              Contact Phone *
            </CFormLabel>
            <CFormFeedback invalid>Please provide the contact phone number.</CFormFeedback>
          </CFormFloating>
          <br />

          <CFormFloating>
            <CFormInput
              id="contact_email"
              name="contact_email"
              type="text"
              value={newPatient.contact_email}
              onChange={(e) => setNewPatient({ ...newPatient, contact_email: e.target.value })}
            ></CFormInput>
            <CFormLabel className="" htmlFor="contact_email">
              Contact Email
            </CFormLabel>
          </CFormFloating>
        </CCol>
      </CRow>
    </CRow>
  )
}

export default Create

Create.propTypes = {
  newUser: PropTypes.array.isRequired,
  setNewUser: PropTypes.func.isRequired,
  newPatient: PropTypes.array.isRequired,
  setNewPatient: PropTypes.func.isRequired,
  groupList: PropTypes.array.isRequired,
  defaultGroup: PropTypes.array.isRequired,
  selectItemList: PropTypes.array.isRequired,
  facilityList: PropTypes.array.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
}
