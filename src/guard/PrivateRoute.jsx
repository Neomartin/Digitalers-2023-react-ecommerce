import { Navigate } from "react-router-dom"


function PrivateRoute( { children } ) {

    const isAdmin = localStorage.getItem("role")

    console.log(isAdmin)

    if(isAdmin !== 'ADMIN_ROLE') return <Navigate to="/" replace />
    return children
}

export default PrivateRoute