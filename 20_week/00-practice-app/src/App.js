import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.
import Hello from './components/Hello'; //activity 1
import HelloReact from './components/HelloReact'; //activity 2
import Welcome from './components/Welcome'; //activity 3
import HelloDiv from './components/HelloDiv'; //activity 4
import JSXVariables from './components/JSXVariables'; //activity 5
import JSXVariablesv6 from './components/JSXVariablesv6'; //activity 6
import Alert from './components/Alert'; //activity 7
import Display from './components/Display'; //activity 8
import List from './components/List'; //activity 9
import Nav from './components/Nav'; //activity 9
import users from './users'; //activity 9
import ListTen from './components/ListTen'; //activity 10
import groceries from './groceries'; //activity 10
import Greeting from "./components/Greeting"; //activity 11

const message = 'Invalid user id or password';
const alertType = "danger"

// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
export default function App() {
  return (
    <div>
      <Greeting />
      <ListTen groceries={groceries} />
      <Nav />
      <List users={users} />
      <Display />
      <Alert type={alertType} message={message} />
      <JSXVariablesv6 />
      <JSXVariables />
      <HelloDiv />
      <Welcome />
      <HelloReact />
      <Hello />
    </div>
  );
}
