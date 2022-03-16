import React from 'react'
import { CButton, CCol, CRow, CTable, CTableBody, CTableDataCell, CTableRow } from '@coreui/react'
import PropTypes from 'prop-types'
import { DocsExample } from 'src/components'

const Task = ({ handleModal, newVital }) => {
  return (
    <CRow className="mb-3">
      <CCol md={12}>
        <DocsExample href="components/table#bordered-tables">
          <CTable bordered>
            <CTableBody>
              <CTableRow>
                <CTableDataCell colSpan={2}>
                  <CButton
                    type="submit"
                    color="outline-primary"
                    style={{ width: '100%' }}
                    onClick={() => handleModal(2, true)}
                  >
                    Vital Sign
                  </CButton>
                  <br />
                  <br />
                  <CButton
                    type="submit"
                    color="outline-primary"
                    style={{ width: '100%' }}
                    onClick={() => handleModal(3, true)}
                  >
                    Diagnosis
                  </CButton>
                  <br />
                  <br />
                  <CButton type="submit" color="outline-primary" style={{ width: '100%' }}>
                    Laboratory
                  </CButton>
                  <br />
                  <br />
                  <CButton type="submit" color="outline-primary" style={{ width: '100%' }}>
                    Pharmacy
                  </CButton>
                  <br />
                  <br />
                  <CButton type="submit" color="outline-primary" style={{ width: '100%' }}>
                    Bill and Payment
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </DocsExample>
      </CCol>
    </CRow>
  )
}

export default Task

Task.propTypes = {
  handleModal: PropTypes.func.isRequired,
  newVital: PropTypes.array.isRequired,
}
