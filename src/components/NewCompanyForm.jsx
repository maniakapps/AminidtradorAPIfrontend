import React, {Component} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import NewCompanyForm from "./NewCompanyForm";

class NewCompanyModal extends Component {
    state = {
        modal: false,
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal,
        }));
    };

    render() {
        const create = this.props.create;
        var title = "Edit Company";
        var button = "Edit";

        if (create) {
            title = "Add Company";
            button = "Add";
        }

        return (
            <div>
                <Button color="success" onClick={() => this.toggle()}>
                    {button}
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>
                        <NewCompanyForm
                            resetState={this.props.resetState}
                            toggle={this.toggle}
                            company={this.props.company}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.toggle()}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default NewCompanyModal;
