import React from "react";
import logo from "./logo.svg";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { headerItems } from "./components/Header/headerItems";

function App() {
  return (
    <Layout>
      <Routes>
        {headerItems.map((headerItem) => (
          <Route
            path={headerItem.link}
            element={headerItem.pageComponent ?? <></>}
          />
        ))}
      </Routes>
      {/* <Layout /> */}
    </Layout>
  );
}

export default App;
