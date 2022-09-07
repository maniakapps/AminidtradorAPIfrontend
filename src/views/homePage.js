/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import {useContext} from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import Empresa from "../components/Empresa";

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <section>
            {user && <UserInfo user={user}/>}
            <Empresa/>
        </section>
    );
};

export default Home;
