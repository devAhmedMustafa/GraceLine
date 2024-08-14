import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css"
import Validations from "../../../utils/Security/Validations";
import { signal } from "@preact/signals";
import { useEffect, useState } from "react";

const SignupForm = ({valid, setValid} : any)=>{

    const [errors, setErrors] = useState({})

    const handleSubmit = (e: any)=>{
        e.preventDefault()
        // const {name, email, password, passwordConfirm} = e.target.elements;
    }

    const handleEmailValidation = (e: any)=>{
        if (!Validations.validateEmail(e.currentTarget.value)){
            setErrors({...errors, email: 1})
        }
        else{
            setErrors({...errors, email: 0})
        }
    }

    const handleNameValidation = (e: any)=>{
        if (!Validations.required(e.currentTarget.value)){
            setErrors({...errors, name: 1})
        }
        else{
            setErrors({...errors, name: 0})
        }
    }

    const handlePasswordValidation = (e: any)=>{
        if (!Validations.stongPassword(e.currentTarget.value)){
            setErrors({...errors, password: 1})
        }
        else{
            setErrors({...errors, password: 0})
        }
    }

    useEffect(()=>{
        setValid(true);
        for (let [k] of Object.entries(errors)){
            if ((errors as any)[k] == 1){
                setValid(false)
            }
        }

        console.log(errors)

    }, [errors])

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="Name" name="name" onChange={handleNameValidation}/>
            <input type="text" placeholder="Email" name="email" onChange={handleEmailValidation}/>
            <input type="password" placeholder="Password" name="password" onChange={handlePasswordValidation}/>
            <input type="Password" placeholder="Confirm Password" name="passwordConfirm"/>

            <div>
                <Link to="/auth/login">Already have an account? <span>Login</span></Link>
                <button disabled={!valid} type="submit">Signup</button>
            </div>
        </form>
    )
}

export default SignupForm;