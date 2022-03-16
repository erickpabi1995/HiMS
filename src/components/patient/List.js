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
  newUser,
  setNewUser,
  newPatient,
  setNewPatient,
  groupList,
  defaultGroup,
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
                <strong>Patients</strong>
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
                newUser={newUser}
                setNewUser={setNewUser}
                newPatient={newPatient}
                setNewPatient={setNewPatient}
                groupList={groupList}
                defaultGroup={defaultGroup}
                selectItemList={selectItemList}
                facilityList={facilityList}
              />
            </CRow>

            <CRow>
              <DetailModal
                showDetail={showDetail}
                handleDetail={handleDetail}
                newUser={newUser}
                newPatient={newPatient}
              />
            </CRow>

            <DocsExample href="components/table#bordered-tables">
              <CTable bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Patient Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Facility</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Contact Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="text-center">
                      Action
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {items.map((item) => (
                    <CTableRow key={item.id}>
                      <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                      <CTableDataCell>{item.full_name}</CTableDataCell>
                      <CTableDataCell>{item.facility_name}</CTableDataCell>
                      <CTableDataCell>{item.email}</CTableDataCell>
                      <CTableDataCell>{item.contact_name}</CTableDataCell>
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
  showDetail: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDetail: PropTypes.func.isRequired,
  newUser: PropTypes.array.isRequired,
  setNewUser: PropTypes.func.isRequired,
  newPatient: PropTypes.array.isRequired,
  setNewPatient: PropTypes.func.isRequired,
  groupList: PropTypes.array.isRequired,
  defaultGroup: PropTypes.array.isRequired,
  selectItemList: PropTypes.array.isRequired,
  facilityList: PropTypes.array.isRequired,
}
