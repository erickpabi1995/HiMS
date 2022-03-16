import React from 'react'
import {
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

const Detail = ({ newItem }) => {
  return (
    <CRow className="mb-3">
      <CCol md={12}>
        <DocsExample href="components/table#bordered-tables">
          <CTable bordered>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell>Name</CTableHeaderCell>
                <CTableDataCell>{newItem.name}</CTableDataCell>
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
