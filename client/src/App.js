import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Categories from "./components/Categories";
import Admin from "./components/Admin";

export default function App() {
  return (
    <div className="App">
      <Layout>
        bottleshop
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Categories />}></Route>
            <Route exact path="/admin" element={<Admin />}></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}
