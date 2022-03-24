import React from 'react'
import {
  CImage,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import PropTypes from 'prop-types'
import { DocsExample } from 'src/components'
import photo from './../../assets/images/avatars/6.jpg'

const Detail = ({ newUser, newPatient }) => {
  return (
    <CRow className="mb-3">
      <CCol md={6}>
        <DocsExample href="components/table#bordered-tables">
          <CTable bordered>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableDataCell>{newPatient.full_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>National ID</CTableHeaderCell>
                <CTableDataCell>{newUser.national_id}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Email</CTableHeaderCell>
                <CTableDataCell>{newUser.email}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Date of Birth</CTableHeaderCell>
                <CTableDataCell>{newUser.date_of_birth}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Gender</CTableHeaderCell>
                <CTableDataCell>{newUser.gender_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Nationality</CTableHeaderCell>
                <CTableDataCell>{newUser.nationality_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Marital Status</CTableHeaderCell>
                <CTableDataCell>{newPatient.marital_status_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Occupation</CTableHeaderCell>
                <CTableDataCell>{newPatient.occupation_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Religion</CTableHeaderCell>
                <CTableDataCell>{newPatient.religion_name}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </DocsExample>
      </CCol>

      <CCol md={6}>
        <DocsExample href="components/table#bordered-tables">
          <CTable bordered>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell>Primary Phone</CTableHeaderCell>
                <CTableDataCell>{newUser.primary_phone}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Secondary Phone</CTableHeaderCell>
                <CTableDataCell>{newUser.secondary_phone}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Resident Address</CTableHeaderCell>
                <CTableDataCell>{newPatient.resident_address}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Contact Name</CTableHeaderCell>
                <CTableDataCell>{newPatient.contact_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Contact Phone</CTableHeaderCell>
                <CTableDataCell>{newPatient.contact_phone}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Contact Email</CTableHeaderCell>
                <CTableDataCell>{newPatient.contact_email}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell colSpan={2}>
                  <CImage className="detail_photo" align="end" src={newUser.photo_url} />
                </CTableHeaderCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </DocsExample>
      </CCol>
    </CRow>
  )
}

export default Detail

Detail.propTypes = {
  newUser: PropTypes.array.isRequired,
  newPatient: PropTypes.array.isRequired,
}
