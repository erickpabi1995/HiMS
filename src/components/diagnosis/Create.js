import React from 'react'
import { CCol, CRow } from '@coreui/react'
import PropTypes from 'prop-types'

const Create = ({ newItem, setNewItem, selectItemList }) => {
  return (
    <>
      <CRow className="mb-3">
        <CCol md={4}></CCol>
      </CRow>
    </>
  )
}

export default Create

Create.propTypes = {
  newItem: PropTypes.array.isRequired,
  setNewItem: PropTypes.func.isRequired,
  selectItemList: PropTypes.array.isRequired,
}
