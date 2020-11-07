import React, { Component } from 'react';
import { Header, List, Container } from 'semantic-ui-react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <Container text style={{ marginTop: '1em' }}>
          <Header as='h2'>Chesda Reth Software Developer - Onboarding Project </Header>
          <p>Welcome to my React web application that demonstrates <strong>CRUD</strong> (Create, Read, Update and Delete) operations. This app is built on: </p>
          <List bulleted>
            <List.Item><a href='https://get.asp.net/' target="blank">ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx' target="blank">C#</a> for cross-platform server-side code</List.Item>
            <List.Item><a href='https://facebook.github.io/react/' target="blank">React</a> for client-side code</List.Item>
            <List.Item><a href='https://react.semantic-ui.com/' target="blank">Semantic UI React</a> for layout and styling</List.Item>
            <List.Item><a href='https://azure.microsoft.com/en-us/services/sql-database/' target="blank">Azure SQL Database</a> for the backend database</List.Item>
            <List.Item><a href='https://www.npmjs.com/package/react-axios' target="blank">react-axios</a> libraries for AJAX calls</List.Item>
          </List>
          <Header as='h4'>The Goal:</Header>
          <List bulleted>
            <List.Item>Be able to build an MVC application with Visual Studio and connect it to an SQL database.</List.Item>
            <List.Item>Understand how to create and use React JS components.</List.Item>
          </List>
        </Container>
      </div>
    );
  }
}