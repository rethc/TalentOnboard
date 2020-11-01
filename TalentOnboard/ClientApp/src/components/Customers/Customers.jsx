import React, { Component } from 'react';
import axios from 'axios';
import { Table, Header } from 'semantic-ui-react';
import CreateCustomerModal from './CreateCustomerModal';
import UpdateCustomerModal from './UpdateCustomerModal';
import DeleteCustomerModal from './DeleteCustomerModal';

export class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
    
    this.populateCustomerData = this.populateCustomerData.bind(this);
  }

  componentDidMount() {
    this.populateCustomerData();
  }

  populateCustomerData() {
    axios.get("Customers/GetCustomers")
      .then((result) => {
        this.setState({ customers: result.data })
      })
      .catch((error) => {
        console.log(error);
      });
      
  }

  render() {
    return (
      <div>
        <Header as='h2'>Customer Table</Header>
        <p>This component demonstrates CRUD operations from the customer table.</p>

        <CreateCustomerModal updateTable={this.populateCustomerData}/>

        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.customers.map((customer) => {
              return (
                <Table.Row key={customer.id}>
                  <Table.Cell>{customer.id}</Table.Cell>
                  <Table.Cell>{customer.name}</Table.Cell>
                  <Table.Cell>{customer.address}</Table.Cell>
                  <Table.Cell textAlign="center">

                    <UpdateCustomerModal details={customer} updateTable={this.populateCustomerData} />
                    <DeleteCustomerModal customerID={customer.id} updateTable={this.populateCustomerData} />
                  </Table.Cell>
                </Table.Row>

              )
            })}
          </Table.Body>
        </Table >
      </div>
    );
  }


}