import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css"

const LoginForm = ()=>{
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Email"/>
            <input type="password" placeholder="Password"/>

            <div>
                <Link to="/auth/signup">Don't have an account? <span>Signup</span></Link>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}

export default LoginForm;