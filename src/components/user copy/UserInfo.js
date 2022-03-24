import React, { useState, useEffect } from 'react'
import { CImage, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableRow } from '@coreui/react'
import PropTypes from 'prop-types'
import { DocsExample } from 'src/components'
import photo from './../../assets/images/avatars/6.jpg'
// import getAge from '../../services/FuncService'

const UserInfo = ({ userDetail, handleList }) => {
  const [userAge, setUserAge] = useState(0)

  const getAge = (dob) => {
    var today = new Date()
    var birthDate = new Date(dob) // create a date object directly from `dob` argument
    var age_now = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--
    }
    // console.log(age_now)
    age_now = age_now < 2 ? age_now + ' yr.' : age_now + ' yrs.'
    setUserAge(age_now)
  }

  useEffect(() => {
    getAge(userDetail.date_of_birth)
  })
  return (
    <CRow className="mb-3">
      <CCol md={12}>
        <DocsExample href="components/table#bordered-tables">
          <CTable bordered>
            <CTableBody>
              <CTableRow>
                <CTableDataCell>
                  <CRow>
                    <CCol className="text-center" md={8} sm={12}>
                      <strong>
                        {userDetail.first_name} {userDetail.middle_name} {userDetail.last_name}
                      </strong>
                      <br />
                      <span>
                        ({userDetail.gender_name} &nbsp; Age: {userAge})
                      </span>
                      <br />
                      <br />
                      <button
                        className="btn btn-secondary"
                        style={{ width: '90%' }}
                        onClick={() => handleList(true)}
                      >
                        Back
                      </button>
                    </CCol>
                    <CCol md={4} className="text-center" sm={12}>
                      <CImage align="end" src={photo} />
                    </CCol>
                  </CRow>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </DocsExample>
      </CCol>
    </CRow>
  )
}

export default UserInfo

UserInfo.propTypes = {
  userDetail: PropTypes.object.isRequired,
  handleList: PropTypes.func.isRequired,
}
