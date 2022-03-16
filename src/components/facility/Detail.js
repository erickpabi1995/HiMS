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
                <CTableHeaderCell>Category</CTableHeaderCell>
                <CTableDataCell>{newItem.category_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Facility Name</CTableHeaderCell>
                <CTableDataCell>{newItem.name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Email</CTableHeaderCell>
                <CTableDataCell>{newItem.email}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Website</CTableHeaderCell>
                <CTableDataCell>{newItem.website}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Registration No.</CTableHeaderCell>
                <CTableDataCell>{newItem.registration_no}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Contact Name</CTableHeaderCell>
                <CTableDataCell>{newItem.contact_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Primary Phone</CTableHeaderCell>
                <CTableDataCell>{newItem.primary_phone}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Secondary Phone</CTableHeaderCell>
                <CTableDataCell>{newItem.secondary_phone}</CTableDataCell>
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
                <CTableHeaderCell>Country</CTableHeaderCell>
                <CTableDataCell>{newItem.country_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Region/County</CTableHeaderCell>
                <CTableDataCell>{newItem.region_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>District</CTableHeaderCell>
                <CTableDataCell>{newItem.district_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Town</CTableHeaderCell>
                <CTableDataCell>{newItem.town_name}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Street</CTableHeaderCell>
                <CTableDataCell>{newItem.street}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Digital Address</CTableHeaderCell>
                <CTableDataCell>{newItem.digital_address}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell>Postal Code</CTableHeaderCell>
                <CTableDataCell>{newItem.postal_code}</CTableDataCell>
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
