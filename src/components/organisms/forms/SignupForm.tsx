import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./AuthForm.module.css"
import Validations from "../../../utils/Security/Validations";
import { useEffect, useState } from "react";
import usePost from "../../../hooks/usePost";
import Loader from "../../molecules/animated/Loader";


const SignupForm = ({valid, setValid} : any)=>{

    const [errors, setErrors] = useState({email: 1, name: 1, password: 1, confirm: 1})
    const [password, setPassword] = useState<string>("")
    const [submited, setSubmited] = useState(false);

    const {post, error, loading} = usePost('/users/add')

    const handleSubmit = (e: any)=>{
        e.preventDefault()
        const {name, email, password} = e.target.elements;

        post({
            name: name.value,
            email: email.value,
            password: password.value
        })

        setSubmited(true)
    }

    const handleEmailValidation = (e: any)=>{
        if (!Validations.validateEmail(e.currentTarget.value)){
            setErrors({...errors, email: 1} )
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
        setPassword(e.currentTarget.value);
        if (!Validations.stongPassword(e.currentTarget.value)){
            setErrors({...errors, password: 1})
        }
        else{
            setErrors({...errors, password: 0})
        }
    }

    const handlePasswordConfirmationValidation = (e: any)=>{
        if (!Validations.confirmation(e.currentTarget.value, password))
            setErrors({...errors, confirm: 1})
        else
            setErrors({...errors, confirm: 0})
    }

    useEffect(()=>{
        setValid(true);
        for (let [k] of Object.entries(errors)){
            if ((errors as any)[k] == 1){
                setValid(false)
            }
        }

    }, [errors])

    return (

        
        <form onSubmit={handleSubmit} className={styles.form}>

            {(!error && submited) && <Navigate to="/auth/login" replace={true}/>}

            {loading &&
                <Loader/>
            }

            <input type="text" placeholder="Name" name="name" onChange={handleNameValidation}/>

            {errors.name ? <p className={styles.error}>Name field required</p>:<></>}

            <input type="text" placeholder="Email" name="email" onChange={handleEmailValidation}/>
            
            {errors.email ? <p className={styles.error}>Email is not valid</p>:<></>}

            <input type="password" placeholder="Password" name="password" onChange={handlePasswordValidation}/>
            
            {errors.password ? <p className={styles.error}>Password must be strong</p>: <></>}

            <input type="Password" placeholder="Confirm Password" name="passwordConfirm" onChange={handlePasswordConfirmationValidation}/>

            {errors.confirm ? <p className={styles.error}>Password does not match</p> : <></>}

            <div>
                <Link to="/auth/login">Already have an account? <span>Login</span></Link>
                <button disabled={!valid} type="submit">Signup</button>
            </div>
        </form>
    )
}

export default SignupForm;