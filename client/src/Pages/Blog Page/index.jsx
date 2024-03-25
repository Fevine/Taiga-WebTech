import React from 'react'
import style from "./index.module.sass";
import { Helmet } from 'react-helmet-async';

function BlogPage() {
    return (
        <>
            <Helmet>
                <title>BlogPage</title>
            </Helmet>
            <div id={style.BlogPage}>

            </div>
        </>
    )
}

export default BlogPage
