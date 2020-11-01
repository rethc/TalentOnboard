import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react'
import NavMenu from './NavMenu';

export class Layout extends Component {


  render() {
    return (
      <div>
        <NavMenu />
        <Container style={{ padding: '4em' }}>
          {this.props.children}
          <Divider style={{ marginTop: '4em' }} />
          <footer>&copy; 2020 - Chesda Reth React.js </footer>

        </Container>
 



      </div>
    );
  }
}


