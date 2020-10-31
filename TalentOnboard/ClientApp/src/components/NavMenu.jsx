import React, { Component } from 'react'
import { Menu, Container} from 'semantic-ui-react'
import { NavLink, } from 'react-router-dom'

export default class NavMenu extends Component {
  state = { activeItem: '', customers: "text" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted  fixed="top">
        <Container>
        <Menu.Item header>Chesda Reth</Menu.Item>

        <Menu.Item
          as={NavLink} activeClassName='home' to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          activeClassName='customers' as={NavLink} to="/customers" c={this.state.customers}
          name='customers'
          active={activeItem === 'customers'}
          onClick={this.handleItemClick}
        >
        </Menu.Item>

        <Menu.Item
          activeClassName='products' as={NavLink} to="/products"
          name='products'
          active={activeItem === 'products'}
          onClick={this.handleItemClick}
        >
          Products
           </Menu.Item>

        <Menu.Item
          activeClassName='stores' as={NavLink} to="/stores"
          name='stores'
          active={activeItem === 'stores'}
          onClick={this.handleItemClick}
        >
          Stores
           </Menu.Item>

        <Menu.Item
          activeClassName='sales' as={NavLink} to="/sales"
          name='sales'
          active={activeItem === 'sales'}
          onClick={this.handleItemClick}
        >
          Sales
           </Menu.Item>
           </Container>
      </Menu>
    )
  }
}