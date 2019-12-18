import React, { Component } from "react";
import menuArr from "./MenuListArr";

export default class MenuList extends Component {
  render() {
    console.log(menuArr);
    return (
      <div>
        {menuArr.map(item => (
          <div>
            <div>
              <img src={item.src} alt={item.name} key={item.id} />
            </div>
            <div className="item-text">
              <div>{item.name}</div>
              <div>
                <span>In </span>
                {item.where}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
