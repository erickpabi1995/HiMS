import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
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
import { cilTrash, cilNotes, cilPencil, cilPlus } from '@coreui/icons'

import CreateModal from './CreateModal'
import Table from '../table/Table'
// import $ from 'jquery'
import DataTable from 'react-data-table-component'

const List = ({
  items,
  showCreateForm,
  handleCreateEdit,
  handleSubmit,
  handleDelete,
  newItem,
  setNewItem,
}) => {
  // $(document).ready(function () {
  //   $('#list_table').DataTable()
  // })
  // const data = [
  //   { id: 1, title: 'DataTable in ReactJS', year: '2021' },
  //   { id: 2, title: 'DataTable in Vu', year: '2021' },
  // ]
  const columns = [
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },
    {
      name: 'Year',
      selector: 'year',
      sortable: true,
      right: true,
    },
  ]
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol md={11}>
                <strong>User Groups</strong>
              </CCol>
              <CCol md={1}>
                <CButton
                  color="outline-primary"
                  title="new record"
                  onClick={() => handleCreateEdit(true, 0)}
                >
                  <CIcon icon={cilPlus} />
                </CButton>
              </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CreateModal
                showCreateForm={showCreateForm}
                handleCreateEdit={handleCreateEdit}
                handleSubmit={handleSubmit}
                newItem={newItem}
                setNewItem={setNewItem}
              />
            </CRow>

            <Table
              columns={columns}
              data={items}
              handleCreateEdit={handleCreateEdit}
              handleDelete={handleDelete}
              // handleDetail={handleDetail}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default List

List.propTypes = {
  items: PropTypes.array.isRequired,
  showCreateForm: PropTypes.bool.isRequired,
  handleCreateEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
}
