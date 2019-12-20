import React, { Component } from "react";
import menuArr from "./MenuListArr";

export default class MenuList extends Component {
  render() {
    const menulistMainSelect = {
      margin: "50px 40px auto 107px"
    };
    const menulistMainNoSelect = {
      margin: "50px 37px auto 140px"
    };
    const menulistTextStyleSelect = {
      backgroundColor: "#ffffff",
      width: "233px",
      height: "140px"
    };
    const menulistTextStyleNoSelect = {
      backgroundColor: "#ffffff",
      width: "203px",
      height: "120px"
    };
    const menulistImageSelect = {
      position: "relative",
      left: "170px",
      bottom: "55px"
    };
    const menulistImageNoSelect = {
      position: "relative",
      right: "100px",
      bottom: "50px"
    };
    console.log(menuArr);
    return (
      <div>
        {menuArr.map(item => (
          <div
            key={item.id}
            style={
              item.name === "BED LAMP"
                ? menulistMainSelect
                : menulistMainNoSelect
            }
          >
            <div
              style={
                item.name === "BED LAMP"
                  ? menulistTextStyleSelect
                  : menulistTextStyleNoSelect
              }
            >
              <div className="menulist-text">
                <div className="menulist-name">{item.name}</div>
                <div className="menulist-where">
                  <span>In </span>
                  {item.where}
                </div>
              </div>
              <img
                style={
                  item.name === "BED LAMP"
                    ? menulistImageSelect
                    : menulistImageNoSelect
                }
                src={item.src}
                alt={item.name}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
