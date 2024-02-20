import React from "react";

import { Layout, Menu, theme } from "antd";

import { BrowserRouter, Link } from "react-router-dom";
import { Header } from "antd/lib/layout/layout";
import styles from "./App.module.css";
import { RouterIndex } from "./component/router";

const MENU_PLAN = "plans";
const MENU_CASE = "cases";
const MENU_STATISTIC = "statistic";

const MenuLabelMap = {
  [MENU_PLAN]: "Test Plans",
  [MENU_CASE]: "Case Library",
  [MENU_STATISTIC]: "Statistic",
};

function getInitPath() {
  if (window) {
    const path = window.location.pathname;

    if (
      [MENU_PLAN, MENU_CASE, MENU_STATISTIC].find((p) =>
        path.startsWith(`/${p}`)
      )
    ) {
      return path.slice(1);
    } else {
      return null;
    }
  } else {
    return null;
  }
}

const App = (): JSX.Element => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [current, setCurrent] = React.useState(getInitPath() || MENU_PLAN);
  const handleMenuClick = (evt) => {
    setCurrent(evt);
  };
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Header style={{ display: "flex", alignItems: "center" }}>
            <div className={styles.headerTitle} style={{ color: "#fff" }}>
              SmartTest
            </div>
            <Menu
              style={{ width: "800px" }}
              theme="dark"
              onClick={handleMenuClick}
              mode="horizontal"
              defaultSelectedKeys={[current] || [MENU_PLAN]}
              activeKey={current}
            >
              <Menu.Item key={MENU_PLAN}>
                <Link to={MENU_PLAN}>{MenuLabelMap[MENU_PLAN]}</Link>
              </Menu.Item>
              <Menu.Item key={MENU_CASE}>
                <Link to={MENU_CASE}>{MenuLabelMap[MENU_CASE]}</Link>
              </Menu.Item>
              <Menu.Item key={MENU_STATISTIC}>
                <Link to={MENU_STATISTIC}>{MenuLabelMap[MENU_STATISTIC]}</Link>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
        <RouterIndex />
      </BrowserRouter>
    </>
  );
};

export default App;
