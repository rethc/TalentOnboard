import React, { Component } from 'react';
import axios from 'axios';
import { Table, Header } from 'semantic-ui-react';

export class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = { sales: [], };
    this.populateSalesData = this.populateSalesData.bind(this);
  }

  componentDidMount() {
    this.populateSalesData();
  }

  populateSalesData = () => {
    axios.get("Sales/GetSales")
      .then((result) => {
        this.setState({ sales: result.data })
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header as='h2'>Sales Table</Header>
        <p>This component demonstrates CRUD operations from the sales table.</p>

        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Customer</Table.HeaderCell>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Store</Table.HeaderCell>
              <Table.HeaderCell>Date Sold</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.sales.map((sale) => {
              return (
                <Table.Row key={sale.id}>
                  <Table.Cell>{sale.id}</Table.Cell>
                  <Table.Cell>{sale.customer.name}</Table.Cell>
                  <Table.Cell>{sale.product.name}</Table.Cell>
                  <Table.Cell>{sale.store.name}</Table.Cell>
                  <Table.Cell>{sale.dateSold}</Table.Cell>
                  <Table.Cell textAlign="center">

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