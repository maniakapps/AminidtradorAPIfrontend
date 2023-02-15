/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */
import axios from "axios";
import jwt_decode from "jwt-decode";
import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/AuthContext";
import dayjs from "dayjs";

const useAxios = (baseURL = "http://localhost:8000/api") => {
    const {authTokens, setUser, setAuthTokens} = useContext(AuthContext);
    const [axiosInstance, setAxiosInstance] = useState(null);

    useEffect(() => {
        if (authTokens) {
            const instance = axios.create({
                baseURL,
                headers: {Authorization: `Bearer ${authTokens.access}`}
            });

            instance.interceptors.request.use(async req => {
                const user = jwt_decode(authTokens.access);
                const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

                if (!isExpired) return req;

                const response = await axios.post(`${baseURL}/token/refresh/`, {
                    refresh: authTokens.refresh
                });

                localStorage.setItem("authTokens", JSON.stringify(response.data));

                setAuthTokens(response.data);
                setUser(jwt_decode(response.data.access));

                req.headers.Authorization = `Bearer ${response.data.access}`;
                return req;
            });

            setAxiosInstance(instance);
        }
    }, [authTokens]);

    return axiosInstance;
};

export default useAxios;
