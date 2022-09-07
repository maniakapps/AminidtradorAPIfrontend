/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header";

function App() {

    return (
        <Router>
            <div className="flex flex-col min-h-screen overflow-hidden">
                <AuthProvider>
                    <Header/>
                    <Routes>
                        <Route exact path='/dashboard' element={
                            <PrivateRoute>
                                <Dashboard/>
                            </PrivateRoute>
                        }/>
                        <Route element={<Login/>} path="/login"/>
                        <Route element={<Register/>} path="/register"/>
                        <Route element={<Home/>} path="/"/>
                        <Route path="*" element={<p>Esa página no existe: 404!</p>}/>
                    </Routes>
                </AuthProvider>
            </div>
            <Footer/>
        </Router>

    );
}

export default App;
