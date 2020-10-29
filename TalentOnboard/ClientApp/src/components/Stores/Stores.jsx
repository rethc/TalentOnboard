import React, { Component } from 'react';
import axios from 'axios';
import { Table, Header } from 'semantic-ui-react';
import CreateStoresModal from './CreateStoresModal'
import UpdateStoresModal from './UpdateStoresModal'
import DeleteStoreModal from './DeleteStoreModal'

export class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = { stores: [] };
    this.populateStoreData = this.populateStoreData.bind(this);
  }

  componentDidMount() {
    this.populateStoreData();
  }

  populateStoreData = () => {
    axios.get("Stores/GetStores")
      .then((result) => {
        this.setState({ stores: result.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Header as='h2'>Stores Table</Header>
        <p>This component demonstrates CRUD operations from the stores table.</p>

        <CreateStoresModal updateTable={this.populateStoreData} />

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
            {this.state.stores.map((store) => {
              return (
                <Table.Row key={store.id}>
                  <Table.Cell>{store.id}</Table.Cell>
                  <Table.Cell>{store.name}</Table.Cell>
                  <Table.Cell>{store.address}</Table.Cell>
                  <Table.Cell textAlign="center">

                    <UpdateStoresModal details={store} updateTable={this.populateStoreData} />

                    <DeleteStoreModal storeID={store.id} updateTable={this.populateStoreData} />


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