import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import NewCompanyForm from "./NewCompanyForm";
import { MDBBtn } from "mdb-react-ui-kit";

class NewCompanyModal extends Component {
  state = {
    modal: false,
  };

  toggle = () => {
    this.setState((previous) => ({
      modal: !previous.modal,
    }));
  };

  renderButton = () => {
    const { create } = this.props;

    const title = create ? "Agregar compañia" : "Editando compañia";

    return (
      <MDBBtn
        color="primary"
        className="float-right"
        onClick={this.toggle}
        style={{ minWidth: "200px", marginBottom: "10px" }}
      >
        {title}
      </MDBBtn>
    );
  };

  render() {
    return (
      <>
        {this.renderButton()}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {this.props.create ? "Agregar compañia" : "Editando compañia"}
          </ModalHeader>

          <ModalBody>
            <NewCompanyForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              company={this.props.company}
            />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default NewCompanyModal;
