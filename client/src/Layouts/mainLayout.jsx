import React from 'react'
import Navbar from './Common Layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Common Layouts/Footer'

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
