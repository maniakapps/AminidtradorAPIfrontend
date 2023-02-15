import React from "react";
import "./index.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <p>Esa página no existe: 404!</p>
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
