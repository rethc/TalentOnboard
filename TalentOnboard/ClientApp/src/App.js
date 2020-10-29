import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Customers } from './components/Customers/Customers';
import { Products } from './components/Products/Products';
import { Stores } from './components/Stores/Stores';
import { Sales } from './components/Sales/Sales';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/customers' component={Customers} />
        <Route path='/products' component={Products} />
        <Route path='/stores' component={Stores} />
        <Route path='/sales' component={Sales} />
      </Layout>
    );
  }
}
