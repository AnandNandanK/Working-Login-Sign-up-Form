// import React from 'react';
// import {useNavigate} from 'react-router-dom'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({isLogin,children}) => {
    console.log(isLogin);
    
    // const navigate = useNavigate();

    if (isLogin) {
            return children;
    } else {
        // return navigate('/login');
        return <Navigate to='/login'/>
    }
 
}

export default PrivateRoute;
