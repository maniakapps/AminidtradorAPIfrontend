/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import {Navigate} from "react-router-dom";
import {useContext} from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({children}) => {
    let {user} = useContext(AuthContext);
    if (!user) {
        return <Navigate to="/login" replace/>;
    }
    return children;
};

export default PrivateRoute;