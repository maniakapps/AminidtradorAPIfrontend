/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import React, {Component, Fragment} from "react";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import NewCompanyForm from "./NewCompanyForm";
import {MDBBtn} from "mdb-react-ui-kit";

class NewCompanyModal extends Component {
    state = {
        modal: false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render() {
        const create = this.props.create;

        let title = "Editando compañia";
        let button = <MDBBtn onClick={this.toggle}>Editar</MDBBtn>;
        if (create) {
            title = "Agregar compañia";

            button = (
                <MDBBtn
                    color="primary"
                    className="float-right"
                    onClick={this.toggle}
                    style={{minWidth: "200px", marginBottom: "10px"}}
                >
                    Agregar compañia
                </MDBBtn>
            );

        }

        return (
            <Fragment>
                {button}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

                    <ModalBody>
                        <NewCompanyForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            company={this.props.company}
                        />
                    </ModalBody>
                </Modal>
            </Fragment>
        );
    }
}

export default NewCompanyModal;
