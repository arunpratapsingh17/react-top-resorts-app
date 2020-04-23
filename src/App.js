import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route component={Error} />
        <Route exact path="/single-room" component={SingleRoom} />
      </Switch>
    </>
  );
}

export default App;
