import React, { Fragment } from "react";
import "./App.css";

//components

import CreateHotel from "./components/CreateHotel";
import ListHotel from "./components/ListHotel";
import CreateGuest from "./components/CreateGuest";
import ListGuest from "./components/ListGuest";
import CreateService from "./components/CreateService";
import ListService from "./components/ListService";
import CreateItem from "./components/CreateItem";
import ListItem from "./components/ListItem";
import CreateGuestItem from "./components/CreateGuestItem";
import ListGuestItem from "./components/ListGuestItem";

function App() {
  return (
    <Fragment>
      <div className="container">
        <CreateHotel />
        <ListHotel />
      </div>
      <div className="container">
        <CreateService />
        <ListService />
      </div>
      <div className="container">
        <CreateItem />
        <ListItem/>
      </div>
      <div className="container">
        <CreateGuest />
        <ListGuest/>
      </div>
      <div className="container">
        <CreateGuestItem />
        <ListGuestItem/>
      </div>
    </Fragment>
    
  );
}

export default App;
