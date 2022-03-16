import React from 'react'
import {
  CButton,
  CImage,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
} from '@coreui/react'
import PropTypes from 'prop-types'
import { DocsExample } from 'src/components'
import photo from './../../assets/images/avatars/6.jpg'

import getAge from '../../services/FuncService'

const Info = ({ itemDetail, handleList, newVital, handleSubmit, submitReady, patientOwed }) => {
  // const onClicking = () => {
  //   alert('working')
  // }
  return (
    <CRow className="mb-3">
      <CCol md={12}>
        <DocsExample href="components/table#bordered-tables">
          <CTable bordered>
            <CTableBody>
              <CTableRow>
                <CTableDataCell className="text-center">
                  <br />
                  <CButton
                    style={{ width: '90%' }}
                    className="btn btn-secondary"
                    onClick={() => handleList(true)}
                  >
                    Back
                  </CButton>
                  <br />
                  <br />
                  {(() => {
                    if (!patientOwed & submitReady) {
                      return (
                        <div>
                          <CButton
                            style={{ width: '90%' }}
                            className="btn btn-primary"
                            onClick={(e) => handleSubmit(e, itemDetail.id)}
                          >
                            Submit
                          </CButton>
                        </div>
                      )
                    }
                  })()}
                </CTableDataCell>
                <CTableDataCell>
                  <CImage align="center" src={photo} />
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell colSpan={2} className="text-center">
                  {itemDetail.patient_title} {itemDetail.patient_name}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell className="text-left">
                  Age: &nbsp;{getAge(itemDetail.patient_dob)}
                </CTableDataCell>
                <CTableDataCell className="text-right">
                  Gender: &nbsp;{itemDetail.patient_gender}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>
                  Weight:&nbsp;{newVital[0].weight} &nbsp;
                  {newVital[0].weight_unit}
                </CTableDataCell>
                <CTableDataCell>
                  Heigh:&nbsp;{newVital[0].height} &nbsp; {newVital[0].height_unit}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>
                  Temp:&nbsp;{newVital[0].temperature} &nbsp;
                  {newVital[0].temperature_unit}
                </CTableDataCell>

                <CTableDataCell>
                  BP:&nbsp;{newVital[0].pressure} &nbsp; {newVital[0].pressure_unit}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>Bill Status:</CTableDataCell>
                <CTableDataCell className={patientOwed ? 'text-danger' : 'text-success'}>
                  {patientOwed ? 'Patient Owed' : 'No Unpaid Bill'}
                </CTableDataCell>
              </CTableRow>

              <CTableRow>
                <CTableDataCell>Note:</CTableDataCell>
                <CTableDataCell>{newVital[0].note}</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </DocsExample>
      </CCol>
    </CRow>
  )
}

export default Info

Info.propTypes = {
  itemDetail: PropTypes.object.isRequired,
  newVital: PropTypes.array.isRequired,
  handleList: PropTypes.func.isRequired,
  patientOwed: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitReady: PropTypes.bool.isRequired,
}
