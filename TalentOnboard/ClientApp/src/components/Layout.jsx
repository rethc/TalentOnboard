import React, { Component } from 'react';
import { Container, Divider, Segment } from 'semantic-ui-react'
import NavMenu from './NavMenu';

export class Layout extends Component {


  render() {
    return (
      <div>
        <NavMenu />
            <Segment basic style={{ paddingTop: '3em' }}>
                {this.props.children}
            </Segment>
            <Segment basic>
                <hr />
          <footer>&copy; 2020 - Chesda Reth React.js </footer>
            </Segment >
      </div>
    );
  }
}