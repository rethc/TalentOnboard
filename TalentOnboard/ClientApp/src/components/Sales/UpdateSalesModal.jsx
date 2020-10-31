import React, { Component } from 'react';
import { Button, Header, Modal, Form } from 'semantic-ui-react'
import axios from 'axios';

export default class UpdateSalesModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      salesID: this.props.details.id,
      salesCustomerID: this.props.details.customer.id,
      salesProductID: this.props.details.product.id,
      salesStoreID: this.props.details.store.id,
      modalOpen: false
    };

    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentDidMount() {
    //console.log(this.state.salesCustomerID, this.state.salesProductID, this.state.salesStoreID)

  }

  // Name Text Handler
  handleName(event) {
    this.setState({ productName: event.target.value });
  }

  // Price Text Handler
  handlePrice(event) {
    this.setState({ productPrice: event.target.value });
  }

  // Modal Button Handler
  handleClose = () => this.setState({ modalOpen: false })
  handleOpen = () => this.setState({ modalOpen: true })

  handleSubmit(event) {
    this.updateProductDetails();
    this.handleClose();
  }

  updateProductDetails = () => {
    axios.put(`Products/PutProducts/${this.state.productID}`, { id: this.state.productID, name: this.state.productName, price: this.state.productPrice })
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
        <Modal.Header>Edit Sale</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <Header>{this.state.productName} </Header>
            <Form>
              <Form.Field>
                <label>Customer Name</label>
               


              </Form.Field>
              <Form.Field>
                <label>Price</label>

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
