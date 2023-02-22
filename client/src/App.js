import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Categories from "./components/Categories";
import Wine from "./components/Wine";
import Cheeses from "./components/Cheeses";
import Admin_product from "./components/Admin/Admin_product";
import Admin_user from "./components/Admin/Admin_user";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Navigate replace to="/categories" />}
            ></Route>
            <Route exact path="/categories" element={<Categories />}></Route>
            <Route exact path="/categories/wine" element={<Wine />}></Route>
            <Route
              exact
              path="/categories/cheeses"
              element={<Cheeses />}
            ></Route>
            <Route exact path="/admin/user" element={<Admin_user />}></Route>
            <Route
              exact
              path="/admin/product"
              element={<Admin_product />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}
