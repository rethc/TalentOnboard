import React, { Component } from 'react';
import axios from 'axios';
import { Table, Header } from 'semantic-ui-react';
import CreateProductModal from './CreateProductModal';
import UpdateProductModal from './UpdateProductModal'
import DeleteProductModal from './DeleteProductModal';

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.populateProductData = this.populateProductData.bind(this);
  }

  componentDidMount() {
    this.populateProductData();
  }

  populateProductData() {
    axios.get("Products/GetProducts")
      .then((result) => {
        this.setState({ products: result.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header as='h2'>Products Table</Header>
        <p>This component demonstrates CRUD operations from the products table.</p>

        <CreateProductModal updateTable={this.populateProductData} />

        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.products.map((product) => {
              return (
                <Table.Row key={product.id}>
                  <Table.Cell>{product.id}</Table.Cell>
                  <Table.Cell>{product.name}</Table.Cell>
                  <Table.Cell>$ {product.price}</Table.Cell>
                  <Table.Cell textAlign="center">


                    <UpdateProductModal details={product} updateTable={this.populateProductData} />

                    <DeleteProductModal productID={product.id} updateTable={this.populateProductData} />


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