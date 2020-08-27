import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import WhereYourMoneyGoes from "./screens/WhereYourMoneyGoes/WhereYourMoneyGoes";
import EventCreate from "./screens/EventCreate/EventCreate";
import EventEdit from "./screens/EventEdit/EventEdit";
import Donation from "./screens/Donation/Donation";

import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/whatwedo">
          <AboutUs />
        </Route>
        <Route path="/donations">
          <Donation />
        </Route>
        <Route path="/whereyourmoneygoes">
          <WhereYourMoneyGoes />
        </Route>
        <Route path="/newevent">
          <EventCreate />
        </Route>
        <Route path="/event/edit/:id" exact>
          <EventEdit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
