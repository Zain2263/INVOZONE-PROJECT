import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/sidebar.css";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ iconName, title, isActive, url }) => {
  let menuClass = "menu-item";
  if (isActive) {
    menuClass += " active-menu";
  }
  return (
    <div className={menuClass}>
      <NavLink className="menu-link" to={url}>
        <FontAwesomeIcon icon={iconName} className="menu-icon" />

        <h1 className="menu-title">{title}</h1>
      </NavLink>
    </div>
  );
};

const SideBar = ({ contract, account, activeLink }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div id="sidebar-container">
        <div className="two-div-flex">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            className="menu-icon"
            style={{ cursor: "pointer", marginTop: 20 }}
            onClick={() => navigate(-1)}
          />
          <h1 style={{ color: "Yellow", position: "fixed", right: 20, top: 20 }}>
          CONNECTED
        </h1>
        </div>

        <div id="menu-item-container">
          <MenuItem
            iconName={"fa-solid fa-add"}
            title="Add Product"
            isActive={activeLink === "addproduct"}
            url="/vendor/addproduct"
          />
          <MenuItem
            iconName={"fa-solid fa-truck-front"}
            title="Distributor's List"
            isActive={activeLink === "available-distributors"}
            url="/vendor/available-distributors"
          />
           <MenuItem
            iconName={"fa-solid fa-search"}
            title="Tracker"
            isActive={activeLink === "products"}
            url="/vendor/products"
          />
          <MenuItem
          iconName={"fa-solid fa-camera"}
          title="Authenticate"
          isActive={activeLink === "authenticate"}
          url="/vendor/authenticate"
        />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
