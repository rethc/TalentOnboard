import React, { Component } from 'react';
import axios from 'axios';
import { Table, Header } from 'semantic-ui-react';
import UpdateSalesModal from './UpdateSalesModal';
import CreateSalesModal from './CreateSalesModal';
import DeleteSalesModal from './DeleteSalesModal';

export class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = { sales: [], customerList: [], storeList: [], productList: []};
    this.populateSalesData = this.populateSalesData.bind(this);
  }

  componentDidMount() {
    this.populateSalesData();
    this.getTableList();
  }

  populateSalesData = () => {
    axios.get("Sales/GetSalesList")
      .then((result) => {
        this.setState({ sales: result.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getTableList = () => {
    axios.get("Customers/GetCustomerList")
      .then((result) => {
        this.setState({ customerList: result.data })
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get("Stores/GetStoreList")
      .then((result) => {
        this.setState({ storeList: result.data })
      })
      .catch((error) => {
        console.log(error);
      });

      axios.get("Products/GetProductList")
      .then((result) => {
        this.setState({ productList: result.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    const customerList = this.state.customerList.map(c => ({ key: c.id, text: c.name, value: c.name }));
    const storeList = this.state.storeList.map(s => ({ key: s.id, text: s.name, value: s.name }));
    const productList = this.state.productList.map(p => ({ key: p.id, text: p.name, value: p.name }));


    return (
      <div>
        <Header as='h2'>Sales Table</Header>
        <p>This component demonstrates CRUD operations from the sales table.</p>

        <CreateSalesModal updateTable={this.populateSalesData} customerList={customerList} storeList={storeList} productList={productList} />

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

                    <UpdateSalesModal details={sale} updateTable={this.populateSalesData} customerList={customerList} storeList={storeList} productList={productList} />
                    <DeleteSalesModal salesId={sale.id} updateTable={this.populateSalesData}/>


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