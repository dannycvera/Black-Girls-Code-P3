import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import WhereYourMoneyGoes from "./screens/WhereYourMoneyGoes/WhereYourMoneyGoes";
import EventCreate from "./screens/EventCreate/EventCreate";
import EventEdit from "./screens/EventEdit/EventEdit";

import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        {<Route exact path="/" component={Home} />}
        {<Route exact path="/whatwedo" component={AboutUs} />}
        {
          <Route
            exact
            path="/whereyourmoneygoes"
            component={WhereYourMoneyGoes}
          />
        }
        {<Route exact path="/newevent" component={EventCreate} />}
        {<Route exact path="/event/edit/:id" component={EventEdit} />}
      </Switch>
    </div>
  );
}

export default App;

