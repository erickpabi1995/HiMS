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
import { cilTrash, cilPencil, cilPlus } from '@coreui/icons'

import CreateModal from './CreateModal'

const List = ({
  items,
  showCreateForm,
  handleCreateEdit,
  handleSubmit,
  handleDelete,
  newItem,
  setNewItem,
  selectItemList,
}) => {
  const getParentText = (parent_id) => {
    let result = items.find((item) => item.parent === parent_id)
    if (result.length > 0) {
      return result[0].parent_name
    }
    return parent_id
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol md={11}>
                <strong>Select Items</strong>
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
                selectItemList={selectItemList}
              />
            </CRow>

            <DocsExample href="components/table#bordered-tables">
              <CTable bordered>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Value</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Text</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Parent</CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="text-center">
                      Action
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {items.map((item) => (
                    <CTableRow key={item.id}>
                      <CTableHeaderCell scope="row">{item.id}</CTableHeaderCell>
                      <CTableDataCell>{item.type}</CTableDataCell>
                      <CTableDataCell>{item.value}</CTableDataCell>
                      <CTableDataCell>{item.text}</CTableDataCell>
                      <CTableDataCell>{getParentText(item.parent)}</CTableDataCell>
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
  handleDelete: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
  selectItemList: PropTypes.array.isRequired,
  getParentName: PropTypes.func.isRequired,
}
