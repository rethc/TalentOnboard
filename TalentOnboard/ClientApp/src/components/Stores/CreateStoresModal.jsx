import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react'
import axios from 'axios';

export default class CreateStoresModal extends Component {

  constructor(props) {
    super(props);
    this.state = { storeName: '', storeAddress: '', modalOpen: false };

    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.addNewStore();
    this.handleClose();
  }

  // Name Text Handler
  handleName(event) {
    this.setState({ storeName: event.target.value });
  }

  // Address Text Handler
  handleAddress(event) {
    this.setState({ storeAddress: event.target.value });
  }

  // Modal Button Handler
  handleClose = () => this.setState({ modalOpen: false })
  handleOpen = () => this.setState({ modalOpen: true })


  addNewStore = () => {
    axios.post("Stores/PostStores", {
      name: this.state.storeName,
      address: this.state.storeAddress
    })
      .then((result) => {
        this.props.updateTable();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Modal
        onClose={this.handleClose}
        onOpen={this.handleOpen}
        open={this.state.modalOpen}
        size='tiny'
        trigger={<Button primary>New Store</Button>}
      >
        <Modal.Header>Create a new store</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Store Name</label>
                <input type="text" placeholder="Name" value={this.state.storeName}
                  onChange={this.handleName} />

              </Form.Field>
              <Form.Field>
                <label>Address</label>
                <input type="text" placeholder="Address" value={this.state.storeAddress}
                  onChange={this.handleAddress} />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={this.handleClose}>
            Close
            
        </Button>
          <Button
            type='submit'
            content="Create"
            icon='checkmark'
            labelPosition='right'
            onClick={this.handleSubmit}
            positive        
          />
        </Modal.Actions>
      </Modal>
    )
  }
}
