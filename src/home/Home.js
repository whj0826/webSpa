import React, {Fragment} from "react";
import {NavLink} from "react-router-dom";

export default function Home(){
    return(
        <Fragment>
            <div>
                <NavLink to="/SignIn">登录</NavLink>
                <br/>
                <NavLink to="/SignUp">注册</NavLink>
                <br/>
                <NavLink to="/Comment">评论</NavLink>
            </div>
            <div>
                {/*<NavLink to="/Comment">评论</NavLink>*/}
            </div>
        </Fragment>
    );
}