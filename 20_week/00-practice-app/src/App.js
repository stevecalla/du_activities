import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.
// import Hello from './components/activity1/Hello'; //activity 1
// import HelloReact from './components/activity2/HelloReact'; //activity 2
// import Welcome from './components/activity3/Welcome'; //activity 3
// import HelloDiv from './components/activity4/HelloDiv'; //activity 4
// import JSXVariables from './components/activity5/JSXVariables'; //activity 5
// import JSXVariablesv6 from './components/activity6/JSXVariablesv6'; //activity 6
// import Alert from './components/activity7/Alert'; //activity 7
// const message = 'Invalid user id or password'; //activity 7
// const alertType = "danger" //activity 7
// import Display from './components/activity8/Display'; //activity 8
// import List from './components/activity9/List'; //activity 9
// import Nav from './components/activity9/Nav'; //activity 9
// import users from './components/activity9/users'; //activity 9
// import ListTen from './components/activity10/ListTen'; //activity 10
// import groceries from './components/activity10/groceries'; //activity 10
// import Greeting from "./components/activity11/Greeting"; //activity 11
// import GreetingTwelve from "./components/activity12/GreetingTwelve"; //activity 12
// import Counter from './components/activity13/Counter'; // activity 13
// import CounterFourteen from './components/activity14/CounterFourteen'; // activity 14
// import Form from "./components/activity15/Form"; //activity 15
// import FormSixteen from "./components/activity16/FormSixteen"; //activity 16
// import DisplaySeventeen from './components/activity17/DisplaySeventeen'; //activity 17
// import Thermostat from './components/activity18/Thermostat'; //activity 18
// import SearchResultContainer from './components/activity19/SearchResultContainer'; //activity 19
// import OmdbContainer from './components/activity20/OmdbContainer';
import Navbar from './components/activity21/components/Navbar';
import Header from './components/activity21/components/Header';
import Card from './components/activity21/components/Card';


// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
export default function App() {
  return (
    <div>
      {/* 21 */}
      <Header />
      <Navbar />
      <Card />
      <Card />
      <Card />
      {/* 20 */}
      {/* <OmdbContainer /> */}
      {/* 19 */}
      {/* <SearchResultContainer /> */}
      {/* 18 */}
      {/* <Thermostat /> */}
      {/* 17 */}
      {/* <DisplaySeventeen /> */}
      {/* 16 */}
      {/* <FormSixteen /> */}
      {/* 15 */}
      {/* <Form /> */}
      {/* 14 */}
      {/* <CounterFourteen /> */}
      {/* 13 */}
      {/* <Counter /> */}
      {/* 12 */}
      {/* <GreetingTwelve /> */}
      {/* 11 */}
      {/* <Greeting /> */}
      {/* 10 */}
      {/* <ListTen groceries={groceries} /> */}
      {/* 9 */}
      {/* <Nav />
      <List users={users} /> */}
      {/* 8 */}
      {/* <Display /> */}
      {/* 7 */}
      {/* <Alert type={alertType} message={message} /> */}
      {/* 6 */}
      {/* <JSXVariablesv6 /> */}
      {/* 5 */}
      {/* <JSXVariables /> */}
      {/* 4 */}
      {/* <HelloDiv /> */}
      {/* 3 */}
      {/* <Welcome /> */}
      {/* 2 */}
      {/* <HelloReact /> */}
      {/* 1 */}
      {/* <Hello /> */}
    </div>
  );
}
