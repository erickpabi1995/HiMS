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
import DetailModal from './DetailModal'

const List = ({
  items,
  showCreateForm,
  handleCreateEdit,
  handleSubmit,
  showDetail,
  handleDetail,
  handleDelete,
  newItem,
  setNewItem,
  groupList,
  selectItemList,
  facilityList,
}) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol md={11}>
                <strong>Users</strong>
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
                groupList={groupList}
                selectItemList={selectItemList}
                facilityList={facilityList}
              />
            </CRow>

            <CRow>
              <DetailModal showDetail={showDetail} handleDetail={handleDetail} newItem={newItem} />
            </CRow>

            <DocsExample href="components/table#bordered-tables">
              <CTable bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Group</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="text-center">
                      Action
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {items.map((item) => (
                    <CTableRow key={item.id}>
                      <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                      <CTableDataCell>
                        {item.first_name} {item.middle_name} {item.last_name}
                      </CTableDataCell>
                      <CTableDataCell>{item.username}</CTableDataCell>
                      <CTableDataCell>{item.group_name}</CTableDataCell>
                      <CTableDataCell>{item.email}</CTableDataCell>
                      <CTableDataCell>{item.gender_name}</CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CButton
                          color="outline-default"
                          size="sm"
                          onClick={() => handleDetail(true, item.id)}
                          title="Show Details"
                        >
                          <CIcon icon={cilNotes} />
                        </CButton>
                        &nbsp; &nbsp;
                        <CButton
                          color="outline-default"
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
                            if (
                              window.confirm('Are you sure you want to delete the selected record?')
                            )
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
  showDetail: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDetail: PropTypes.func.isRequired,
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
  groupList: PropTypes.array.isRequired,
  selectItemList: PropTypes.array.isRequired,
  facilityList: PropTypes.array.isRequired,
}
