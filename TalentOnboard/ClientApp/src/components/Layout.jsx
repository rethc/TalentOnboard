import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import NavMenu from './NavMenu';

export class Layout extends Component {


  render() {
    return (
      <div>
        <NavMenu />
            <Segment basic>
                {this.props.children}
            </Segment>
            <Segment basic>
                <hr />
          &copy; 2020 - Chesda Reth React.js 
            </Segment >
      </div>
    );
  }
}