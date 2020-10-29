import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import NavMenu from './NavMenu';

export class Layout extends Component {


  render() {
    return (
      <div>
        <NavMenu />
        <Container style={{ padding: '4em' }}>
          {this.props.children}
        </Container>
     

      </div>
    );
  }
}


