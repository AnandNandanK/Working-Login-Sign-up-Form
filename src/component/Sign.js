import React from 'react';
import Template from './Template';
import loginimag from './profile.jpg';



const Sign = ({setIsLogin,isLogin}) => {
    console.log(isLogin);
    return (
        <div>
            <Template
             title={'Welcome Back'}
             desc1={"Build skills for today, tomorrow, and beyond."}
             desc2={"Education to future-proof your carrer."}
             image={loginimag}
             formType={"Sign-up"}
             setIsLogin={setIsLogin}
             isLogin={isLogin}
            ></Template>
        </div>
    );
}

export default Sign;
