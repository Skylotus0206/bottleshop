import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Categories from "./components/Categories";
import Wine from "./components/Wine";
import Cheeses from "./components/Cheeses";
import Admin_products from "./components/Admin/Admin_products";
import Admin_users from "./components/Admin/Admin_users";
import Admin_orders from "./components/Admin/Admin_orders";

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
            <Route exact path="/admin/users" element={<Admin_users />}></Route>
            <Route
              exact
              path="/admin/orders"
              element={<Admin_orders />}
            ></Route>
            <Route
              exact
              path="/admin/products"
              element={<Admin_products />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}
