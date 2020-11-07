import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class NavMenu extends Component {

    render() {
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item header>Chesda Reth</Menu.Item>
                    <Menu.Item
                        as={NavLink}
                        name='home' 
                        to="/" exact={true}
                    >
                    </Menu.Item>
                    <Menu.Item
                        as={NavLink}
                        name='customers'
                        to="/customers"
                    >
                    </Menu.Item>
                    <Menu.Item
                        as={NavLink}
                        name='products'
                        to="/products"
                    >
                    </Menu.Item>

                    <Menu.Item
                        as={NavLink}
                        name='stores'
                        to="/stores"
                    >
                    </Menu.Item>
                    <Menu.Item
                        as={NavLink}
                        name='sales'
                        to="/sales"
                    >
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}