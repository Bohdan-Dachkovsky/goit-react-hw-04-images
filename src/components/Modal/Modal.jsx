import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { createPortal } from 'react-dom'
import NativeModal from '../NativeModal/NativeModal.jsx'

export default class Modal extends Component {
  render() {
    const nodeModal = document.getElementById('another-root')

    return (
      <>
        {createPortal(<NativeModal button={this.props.onActive} />, nodeModal)}
      </>
    )
  }
}
