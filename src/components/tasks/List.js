import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilTask } from '@coreui/icons'

const List = ({ items, handleDetail }) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardBody>
            <CRow></CRow>

            <DocsExample href="components/table#bordered-tables">
              <CTable bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Patient Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Service</CTableHeaderCell>
                    <CTableHeaderCell scope="col">resident_address</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">primary_phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">secondary_phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="text-center">
                      Action
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {items.map((item) => (
                    <CTableRow key={item.id}>
                      <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                      <CTableDataCell>{item.patient_name}</CTableDataCell>
                      <CTableDataCell>{item.service_name}</CTableDataCell>
                      <CTableDataCell>{item.resident_address}</CTableDataCell>
                      <CTableDataCell>{item.email}</CTableDataCell>
                      <CTableDataCell>{item.primary_phone}</CTableDataCell>
                      <CTableDataCell>{item.secondary_phone}</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CButton
                          color="outline-default"
                          size="sm"
                          onClick={() => handleDetail(true, item.id)}
                          title="Show Details"
                        >
                          <CIcon icon={cilTask} />
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default List

List.propTypes = {
  items: PropTypes.array.isRequired,
  showList: PropTypes.bool.isRequired,
  handleList: PropTypes.func.isRequired,
  showDetail: PropTypes.bool.isRequired,
  handleDetail: PropTypes.func.isRequired,
}
