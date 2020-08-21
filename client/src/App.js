import React from "react";
import "./App.css";
import Home from "./screens/Home/Home";
// import Events from "./screens/Events/Events";
// import EventsCreate from "./screens/EventCreate/EventCreate";
// import EventEdit from "./screens/EventEdit/EventEdit";

import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/events" component={Events} /> */}
        {/* <Route exact path="/newEvent" component={EventCreate} />
        <Route exact path="/events/:id/edit" component={EventEdit} /> */}
      </Switch>
    </div>
  );
}

export default App;
