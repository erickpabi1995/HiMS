import React from 'react'
import {
  CButton,
  CForm,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'
import PropTypes from 'prop-types'
import Detail from './Detail'

const DetailModal = ({ showDetail, handleDetail, newUser, newPatient }) => {
  return (
    <CRow>
      <CForm>
        <CModal
          backdrop="static"
          visible={showDetail}
          size="lg"
          onClose={() => handleDetail(false, 0)}
        >
          <CModalHeader>
            <CModalTitle>Detail of {newUser.transaction}</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Detail newUser={newUser} newPatient={newPatient} />
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => handleDetail(false, 0)}>
              Close
            </CButton>
          </CModalFooter>
        </CModal>
      </CForm>
    </CRow>
  )
}

export default DetailModal

DetailModal.propTypes = {
  showDetail: PropTypes.bool.isRequired,
  handleDetail: PropTypes.func.isRequired,
  newUser: PropTypes.array.isRequired,
  newPatient: PropTypes.array.isRequired,
}
