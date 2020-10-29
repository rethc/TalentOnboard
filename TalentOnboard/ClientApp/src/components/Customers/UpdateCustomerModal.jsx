import React, { Component } from 'react';
import { Button, Header, Modal, Form } from 'semantic-ui-react'
import axios from 'axios';

export default class UpdateCustomerModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerID: this.props.details.id,
      customerName: this.props.details.name,
      customerAddress: this.props.details.address,
      modalOpen: false
    };

    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
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
  handleClose = () => this.setState({ modalOpen: false })
  handleOpen = () => this.setState({ modalOpen: true })

  handleSubmit(event) {
    this.updateCustomerDetails();
    this.handleClose();
  }

  updateCustomerDetails = () => {
    axios.put(`Customers/PutCustomers/${this.state.customerID}`, { id: this.state.customerID, name: this.state.customerName, address: this.state.customerAddress })
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
        trigger={<Button>Edit</Button>}
      >
        <Modal.Header>Edit Customer</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <Header>{this.state.customerName} </Header>
            <Form>
              <Form.Field>
                <label>Full Name</label>
                <input type="text" value={this.state.customerName}
                  onChange={this.handleName} />
              </Form.Field>
              <Form.Field>
                <label>Address</label>
                <input type="text" value={this.state.customerAddress}
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
            content="Confirm"
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
