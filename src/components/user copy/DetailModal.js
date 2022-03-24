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

const DetailModal = ({ showDetail, handleDetail, newItem }) => {
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
            <CModalTitle>Detail of {newItem.first_name}</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <Detail newItem={newItem} />
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
  newItem: PropTypes.array.isRequired,
}
