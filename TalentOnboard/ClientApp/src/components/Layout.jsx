import React, { Component } from 'react';
import { Container, Divider, Segment } from 'semantic-ui-react'
import NavMenu from './NavMenu';

export class Layout extends Component {


  render() {
    return (
      <div>
        <NavMenu />
        <Segment style={{ padding: '4em' }}>
                {this.props.children}
            </Segment>

          <footer>&copy; 2020 - Chesda Reth React.js </footer>
      </div>
    );
  }
}


