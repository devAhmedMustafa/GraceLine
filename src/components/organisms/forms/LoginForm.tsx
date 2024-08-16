import { Link, useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.css"
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const LoginForm = ()=>{

    const {login} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(false)

    const handleSubmit = (e: any)=>{
        e.preventDefault();
        const {email, password} = e.target.elements;
        login(email.value, password.value).then((_:any)=> navigate('/'))
        .catch((_: any)=> setError(true))
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="Email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            {error &&
                <p className={styles.error}>Email or password are invalid</p>
            }

            <div>
                <Link to="/auth/signup">Don't have an account? <span>Signup</span></Link>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;