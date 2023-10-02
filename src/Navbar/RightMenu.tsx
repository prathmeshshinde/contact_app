import { Grid, Menu } from "antd";
import React from "react";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { useBreakpoint } = Grid;

const RightMenu: React.FC = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="">Home</a>
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="">Contact Us</a>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
