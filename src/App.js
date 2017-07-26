import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./WoWApp/Navbar.js";
import AppRoutes from "./AppRoutes";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <NavBar />
          </div>
          <div>
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
