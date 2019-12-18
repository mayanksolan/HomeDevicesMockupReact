import React, { Component } from "react";
import menuArr from "./MenuListArr";

export default class MenuList extends Component {
  render() {
    console.log(menuArr);
    return (
      <div>
        {menuArr.map(item => (
          <div>
            <img src={item.src} alt={item.name} key={item.id} />
          </div>
        ))}
      </div>
    );
  }
}
