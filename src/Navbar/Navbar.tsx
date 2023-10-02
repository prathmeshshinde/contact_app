import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const navStyle = {
    textDecoration: "none",
  };

  return (
    <nav className="menuBar">
      <div className="logo">
        <Title level={4} style={{ padding: "20px 0px", width: "300px" }}>
          Contact Manager App
        </Title>
      </div>

      <div className="res-navbar">
        <div className="responsive-menu">
          <MenuOutlined style={{ color: "black" }} onClick={showDrawer} />
        </div>

        {open ? (
          <div className="res-options">
            <div className="menu-item">
              <NavLink to="/" style={navStyle}>
                <p className="menu-text">Home</p>
              </NavLink>
            </div>
            <div className="menu-item">
              <NavLink to="/add" style={navStyle}>
                <p className="menu-text">Add Contact</p>
              </NavLink>
            </div>
            <div className="menu-item">
              <p className="menu-text">Home</p>
            </div>
            <div className="menu-item">
              <p className="menu-text">Home</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="menu-options">
        <div className="menu-item">
          <NavLink
            to="/"
            style={navStyle}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <p className="menu-text">Home</p>
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/add" style={navStyle}>
            <p className="menu-text">Add Contact</p>
          </NavLink>
        </div>
        <div className="menu-item">
          <p className="menu-text">Home</p>
        </div>
        <div className="menu-item">
          <p className="menu-text">Home</p>
        </div>
      </div>

      {/* <div className="menuCon">
        <div className="rightMenu">
          <RightMenu />
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={onClose}
          open={open}
        >
          <RightMenu />
        </Drawer>
      </div> */}
    </nav>
  );
};

export default Navbar;
