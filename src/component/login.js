import React from 'react';
import Template from './Template';
import loginimag from './unnamed.jpg'

const Login = ({isLogin,setIsLogin}) => {
    console.log("Printing isLogin",isLogin);
    return(
        <div>
            <Template
             title={'Welcome Back'}
             desc1={"Build skills for today, tomorrow, and beyond."}
             desc2={"Education to future-proof your carrer."}
             image={loginimag}
             formType={"Login"}
             setIsLogin={setIsLogin}
            ></Template>
        </div>
    )
}

export default Login;
