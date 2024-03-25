import React from 'react'
import style from "./index.module.sass";
import { Helmet } from 'react-helmet-async';

function Login() {
    return (
        <>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div id={style.Login}>

            </div>
        </>
    )
}

export default Login
