import { Outlet, Navigate } from 'react-router-dom'

import React from 'react'

const PrivateRoutes = () => {
    
    let auth = sessionStorage.getItem('token');
    return (
        auth ? <Outlet /> : <Navigate to={"/"} />
    )

}

export default PrivateRoutes