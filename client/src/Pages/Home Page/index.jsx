import React from 'react'
import style from "./index.module.sass";
import { Helmet } from 'react-helmet-async';

function Home() {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div id={style.Home}>

            </div>
        </>
    )
}

export default Home
