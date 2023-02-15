/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import React, { Component } from 'react';
import NewCompanyModal from './NewCompanyModal';
import ConfirmRemovalModal from './ConfirmRemovalModal';
import { Table } from 'react-bootstrap';

class CompaniesList extends Component {
  render() {
    const { companies } = this.props;

    return (
      <Table striped bordered hover size='sm' variant='dark' responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Sitio Web</th>
            <th>Año de fundación</th>
            <th className='text-center'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {!companies || companies.length <= 0 ? (
            <tr>
              <td colSpan='6' align='center'>
                <b>Ops, no companies here yet</b>
              </td>
            </tr>
          ) : (
            companies.map((company) => (
              <tr key={company.pk}>
                <td>{company.pk}</td>
                <td>{company.name}</td>
                <td>{company.website}</td>
                <td>{company.foundation}</td>
                <td align={'center'}>
                  <NewCompanyModal
                    create={false}
                    company={company}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={company.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default CompaniesList;
