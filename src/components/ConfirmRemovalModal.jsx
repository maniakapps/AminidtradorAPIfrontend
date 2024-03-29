import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
import { API_URL } from '../constants';

class ConfirmRemovalModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  deleteCompany = (pk) => {
    axios.delete(`${API_URL}${pk}`).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render() {
    const { pk } = this.props;
    const { modal } = this.state;

    return (
      <Fragment>
        <Button color='danger' onClick={this.toggle}>
          Borrar
        </Button>
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            ¿En verdad deseas borrar la compañia?
          </ModalHeader>
          <ModalFooter>
            <Button variant='secondary' onClick={this.toggle}>
              Cancelar
            </Button>
            <Button variant='primary' onClick={() => this.deleteCompany(pk)}>
              Sí
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmRemovalModal;
