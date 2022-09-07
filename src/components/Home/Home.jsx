/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import React, {Component} from "react";
import {Col, Container, Row} from "reactstrap";
import CompaniesList from "../CompanyList";
import NewCompanyModal from "../NewCompanyModal";

import axios from "axios";

import {API_URL} from "../../constants";

class Home extends Component {
    state = {
        companies: []
    };

    componentDidMount() {
        this.resetState();
    }

    getCompanies = () => {
        axios
            .get(API_URL)
            .then(resp => {
                this.setState({
                    companies: resp.data["companies"]
                });
            })
    }

    resetState = () => {
        this.getCompanies();
    };

    render() {
        return (
            <Container style={{marginTop: "1%", position: "fixed", marginBottom: "1%"}}
                       className="p-2 bg-light border position-center position-static">
                <Row>
                    <Col>
                        <CompaniesList
                            companies={this.state.companies}
                            resetState={this.resetState}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NewCompanyModal create={true} resetState={this.resetState}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
