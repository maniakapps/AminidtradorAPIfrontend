import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Compañia</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="mb-3">
              <Label for="company-name">Nombre</Label>
              <Input
                type="text"
                id="company-name"
                name="name"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Introduce el nombre de la compañia"
              />
            </FormGroup>
            <FormGroup>
              <Label for="company-website">Sitio WEB</Label>
              <Input
                type="text"
                id="company-website"
                name="website"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Introduce el sitío WEB de la compañia"
              />
            </FormGroup>
            <FormGroup>
              <Label for="company-funded">Año de fundación</Label>
              <Input
                type="number"
                id="company-funded"
                name="funded"
                value={this.state.activeItem.description}
                onChange={this.handleChange}
                placeholder="Introduce el año de fundación de la compañia"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
