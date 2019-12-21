import React, { Component } from "react";
import menuArr from "./MenuListArr";

export default class MenuList extends Component {
  render() {
    const menulistMainSelect = {
      margin: "auto 107px auto 40px",
      paddingTop: "30px"
    };
    const menulistMainNoSelect = {
      margin: "50px 37px auto 140px",
      paddingTop: "30px"
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
      left: "190px",
      bottom: "55px"
    };
    const menulistImageNoSelect = {
      position: "relative",
      right: "100px",
      bottom: "50px"
    };
    console.log(menuArr);
    return (
      <div className="menulist_scroll">
        <div className="card-home">
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
      </div>
    );
  }
}
