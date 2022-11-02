// import React, { useState } from 'react';
import React from 'react';
// We import our Welcome component from our components folder so that we can eventually return it.
// import Hello from './components/activity1/Hello'; //1
import HelloReact from './components/activity2/HelloReact'; //2
// import Welcome from './components/activity3/Welcome'; //3
// import HelloDiv from './components/activity4/HelloDiv'; //4
// import JSXVariables from './components/activity5/JSXVariables'; //5
// import JSXVariablesv6 from './components/activity6/JSXVariablesv6'; //6
// import Alert from './components/activity7/Alert'; //7
// const message = 'Invalid user id or password'; //7
// const alertType = "danger" //7
// import Display from './components/activity8/Display'; //8
// import List from './components/activity9/List'; //9
// import Nav from './components/activity9/Nav'; //9
// import users from './components/activity9/users'; //9
// import ListTen from './components/activity10/ListTen'; //10
// import groceries from './components/activity10/groceries'; //10
// import Greeting from "./components/activity11/Greeting"; //11
// import GreetingTwelve from "./components/activity12/GreetingTwelve"; //12
// import Counter from './components/activity13/Counter'; // 13
// import CounterFourteen from './components/activity14/CounterFourteen'; // 14
// import Form from "./components/activity15/Form"; //15
// import FormSixteen from "./components/activity16/FormSixteen"; //16
// import DisplaySeventeen from './components/activity17/DisplaySeventeen'; //17
// import Thermostat from './components/activity18/Thermostat'; //18
// import SearchResultContainer from './components/activity19/SearchResultContainer'; //19
// import OmdbContainer from './components/activity20/OmdbContainer'; //20
// import Navbar from './components/activity21/components/Navbar'; //21
// import Header from './components/activity21/components/Header'; //21
// import Card from './components/activity21/components/Card'; //21
// import Navbar from './components/activity22/components/Navbar'; //22
// import Header from './components/activity22/components/Header'; //22
// import Section from './components/activity22/components/Section'; //22
// import Welcome from './components/activity23/Welcome'; //23
// import PortfolioContainer from "./components/activity24/components/PortfolioContainer"; //24
// import Welcome from './components/activity25/Welcome'; //25
// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.

export default function App() {
  // const [loggedIn, setLoggedIn] = useState(false); //23

  // const [name, setName] = useState(''); //25
  // const [topic, setTopic] = useState(''); //25
  return (
    <div>
      {/* 25 */}
      {/* <div className="container">
        <div>
          <span>Enter your name: </span>
          <input onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <span>What do you want to learn? </span>
          <input onChange={(e) => setTopic(e.target.value)} />
        </div>
        <hr />
        <Welcome name={name} topic={topic} />
      </div> */}

      {/* 24 */}
      {/* <PortfolioContainer /> */}
      {/* 23 */}
      {/* <Welcome loggedIn={loggedIn} setLoggedIn={setLoggedIn} /> */}
      {/* 22 */}
      {/* <Navbar />
      <Header />
      <Section /> */}
      {/* 21 */}
      {/* <Header />
      <Navbar />
      <Card />
      <Card />
      <Card /> */}
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
      <HelloReact />
      {/* 1 */}
      {/* <Hello /> */}
    </div>
  );
}
