/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import React from "react";
import {Form, Input, Label} from "reactstrap";

import axios from "axios";

import {API_URL} from "../constants";
import {MDBBtn, MDBInput, MDBInputGroup} from "mdb-react-ui-kit";

class NewCompanyForm extends React.Component {
    state = {
        pk: 0,
        name: "",
        website: "",
        foundation: new Date().getFullYear()
    };

    componentDidMount() {
        if (this.props.company) {
            const {pk, name, website, foundation} = this.props.company;
            this.setState({pk, name, website, foundation});
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    createCompany = e => {
        e.preventDefault();
        let new_state = {
            "name": this.state.name,
            "website": this.state.website,
            "foundation": this.state.foundation
        }
        axios.post(API_URL, new_state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    editCompany = e => {
        e.preventDefault();
        axios.put(API_URL + this.state.pk, this.state).then(() => {
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    render() {
        return (
            <Form onSubmit={this.props.company ? this.editCompany : this.createCompany}>
                <MDBInputGroup className="mb-3">
                    <Label for="name">Nombre:</Label>
                    <MDBInput
                        className='mb-4'
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </MDBInputGroup>
                <MDBInputGroup>
                    <Label for="website">Sitío WEB:</Label>
                    <Input
                        className='mb-4'
                        type="url"
                        name="website"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.website)}
                    />
                </MDBInputGroup>
                <MDBInputGroup>
                    <Label for="foundation">Año de fundación: :</Label>
                    <Input
                        className='mb-4'
                        type="number"
                        name="foundation"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.foundation)}
                    />
                </MDBInputGroup>
                <MDBBtn>Enviar</MDBBtn>
            </Form>
        );
    }
}

export default NewCompanyForm;
