import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/home";
import config from "./config/constants";

const { CLIENT_ROUTES } = config;

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
