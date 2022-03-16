import React, { useState } from 'react'
import {
  CButton,
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

import getAge from '../../services/FuncService'

const Info = ({ itemDetail, handleList }) => {
  return (
    <CRow>
      <CRow className="mb-3">
        <CCol md={12}>
          <DocsExample href="components/table#bordered-tables">
            <CTable bordered>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <CButton
                      style={{ width: '90%' }}
                      className="btn btn-secondary"
                      onClick={() => handleList(true)}
                    >
                      Back
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CImage align="center" src={photo} />
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell colSpan={2} className="text-center">
                    {itemDetail.full_name}
                  </CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableDataCell className="text-left">
                    Age: &nbsp;{getAge(itemDetail.user.date_of_birth)}
                  </CTableDataCell>
                  <CTableDataCell className="text-right">
                    Gender: &nbsp;{itemDetail.user.gender_name}
                  </CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          </DocsExample>
        </CCol>
      </CRow>
    </CRow>
  )
}

export default Info

Info.propTypes = {
  itemDetail: PropTypes.object.isRequired,
  handleList: PropTypes.func.isRequired,
}
