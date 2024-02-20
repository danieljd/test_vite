import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
// import "antd/dist/antd.less";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: "#440099",
          borderRadius: 2,

          // 派生变量，影响范围小
          // colorBgContainer: "#f6ffed",
        },
      }}
    >
      {" "}
      <App />
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
