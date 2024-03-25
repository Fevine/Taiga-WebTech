import React from 'react'
import style from "./index.module.sass";
import { Helmet } from 'react-helmet-async';

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>AboutPage</title>
            </Helmet>
            <div id={style.AboutPage}>

            </div>
        </>
    )
}

export default AboutPage
