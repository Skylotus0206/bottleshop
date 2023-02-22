import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <header>
        <p className="logo" alt="logo">
          Bottle Shop
        </p>
        <h3>header</h3>
      </header>
      <main>{children}</main>
      <footer>
        <h3>footer</h3>
      </footer>
    </div>
  );
};

export default Layout;
