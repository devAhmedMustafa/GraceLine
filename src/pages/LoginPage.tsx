import React from "react";
import styles from "./AuthPage.module.css"
import LoginForm from "../components/organisms/forms/LoginForm";

const LoginPage : React.FC = ()=>{
    return (
        <div className={styles.box}>
            <h1>Login</h1>

            <div>
                <LoginForm/>
            </div>
        </div>
    )
}

export default LoginPage