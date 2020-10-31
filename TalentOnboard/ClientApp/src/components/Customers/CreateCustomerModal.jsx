import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react'
import axios from 'axios';

export default class CreateCustomerModal extends Component {

  constructor(props) {
    super(props);
    this.state = { customerName: '', customerAddress: '', modalOpen: false };

    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    
    // Button handlers
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.addNewCustomer();
    this.handleClose();
  }

  // Name Text Handler
  handleName(event) {
    this.setState({ customerName: event.target.value });
  }

  // Address Text Handler
  handleAddress(event) {
    this.setState({ customerAddress: event.target.value });
  }

  // Modal Button Handler
  handleClose() {
    this.setState({ modalOpen: false, customerName: '', customerAddress: '' })
  }

  handleOpen() {
    this.setState({ modalOpen: true })
  }


  addNewCustomer = () => {
    axios.post("Customers/PostCustomers", {
      name: this.state.customerName,
      address: this.state.customerAddress
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
        trigger={<Button primary>New Customer</Button>}
      >
        <Modal.Header>Create new customer</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Full Name</label>
                <input type="text" placeholder="Name" value={this.state.customerName}
                  onChange={this.handleName} />

              </Form.Field>
              <Form.Field>
                <label>Address</label>
                <input type="text" placeholder="Address" value={this.state.customerAddress}
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
