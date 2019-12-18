import React, { Component } from "react";
import "../stylesheets/Menu.css";
import MenuList from "./MenuList";

export default class MenuLayout extends Component {
  render() {
    return (
      <div className="menu-frame">
        <MenuList />
      </div>
    );
  }
}
