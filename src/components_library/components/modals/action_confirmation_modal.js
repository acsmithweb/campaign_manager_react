import React from 'react';
import * as ReactBootStrap from "react-bootstrap";

class ActionConfirmationModal extends React.Component {
  render() {
    return (
      <ReactBootStrap.Modal show={this.props.show} onHide={this.props.toggleModal}>
        <ReactBootStrap.Modal.Header closeButton>
          <ReactBootStrap.Modal.Title>Confirm Action</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body> {this.props.message} </ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={this.props.toggleModal}>
            No
          </ReactBootStrap.Button>
          <ReactBootStrap.Button variant="primary" onClick={this.props.execute_action}>
            Yes
          </ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
    )
  }
}

export default ActionConfirmationModal;
