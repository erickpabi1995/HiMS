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

const Detail = ({ newItem }) => {
  return (
    <CRow className="mb-3">
      <CCol md={6}>
        <DocsExample href="components/table#bordered-tables">
          <CTable bordered>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableDataCell>
                  {newItem.first_name} {newItem.middle_name} {newItem.last_name}
                </CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Username</CTableHeaderCell>
                <CTableDataCell>{newItem.username}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Email</CTableHeaderCell>
                <CTableDataCell>{newItem.email}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Date of Birth</CTableHeaderCell>
                <CTableDataCell>{newItem.date_of_birth}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Gender</CTableHeaderCell>
                <CTableDataCell>{newItem.gender_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Nationality</CTableHeaderCell>
                <CTableDataCell>{newItem.nationality_name}</CTableDataCell>
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
                <CTableHeaderCell>National ID</CTableHeaderCell>
                <CTableDataCell>{newItem.national_id}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Primary Phone</CTableHeaderCell>
                <CTableDataCell>{newItem.primary_phone}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Secondary Phone</CTableHeaderCell>
                <CTableDataCell>{newItem.secondary_phone}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell colSpan={2}>
                  <CImage align="end" src={photo} />
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
  newItem: PropTypes.array.isRequired,
}
