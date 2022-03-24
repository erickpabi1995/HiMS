import React, { useState, useEffect } from 'react'
import {
  CButton,
  CRow,
  CCol,
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
import { cilTrash, cilNotes, cilPencil, cilPlus } from '@coreui/icons'
import $ from 'jquery'

const Table = ({ columns, data, handleCreateEdit, handleDelete }) => {
  const initiateTable = () => {
    $(document).ready(function () {
      $('#list_table').DataTable({
        stateSave: true,
      })
    })
  }
  useEffect(() => {
    initiateTable()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <DocsExample href="components/table#bordered-tables">
          <CTable bordered id="list_table">
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Group Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Default Group</CTableHeaderCell>
                <CTableHeaderCell scope="col" className="text-center">
                  Action
                </CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data.map((item) => (
                <CTableRow key={item.id}>
                  <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                  <CTableDataCell>{item.name}</CTableDataCell>
                  <CTableDataCell>{item.default ? 'True' : 'False'}</CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CButton
                      color="outline-primary"
                      size="sm"
                      onClick={() => handleCreateEdit(true, item.id)}
                      title="Edit Record"
                    >
                      <CIcon icon={cilPencil} />
                    </CButton>
                    &nbsp; &nbsp;
                    <CButton
                      color="outline-danger"
                      size="sm"
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete the selected record?'))
                          handleDelete(item.id)
                      }}
                      title="Delete Record"
                    >
                      <CIcon icon={cilTrash} />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </DocsExample>
      </CCol>
    </CRow>
  )
}

export default Table

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  // handleDetail: PropTypes.func.isRequired,
  handleCreateEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
