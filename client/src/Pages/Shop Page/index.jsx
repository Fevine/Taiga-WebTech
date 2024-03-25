import React from 'react'
import style from "./index.module.sass";
import { Helmet } from 'react-helmet-async';

function ShopPage() {
    return (
        <>
            <Helmet>
                <title>ShopPage</title>
            </Helmet>
            <div id={style.ShopPage}>

            </div>
        </>
    )
}

export default ShopPage
