import React, { useEffect, useRef, useState } from "react";
import styles from "./AuthPage.module.css"
import SignupForm from "../components/organisms/forms/SignupForm";
import { computed, effect } from "@preact/signals";
import Color from "../utils/Types/Color";

const SignupPage : React.FC = ()=>{

    const statusRef = useRef<HTMLSpanElement>();

    const [valid, setValid] = useState(false)

    useEffect(()=>{
        if(statusRef.current)
            statusRef.current.style.backgroundColor = valid?Color.green:Color.red;
        
        // setStatus(isSignupValid.value);
    }, [valid])

    return (
        <div className={styles.box}>

            <h1 className="flex items-center gap-3">
                
                <span ref={statusRef as any} className="size-3 rounded-full transition-all duration-700"></span>
                
                Signup 
            </h1>

            <div>
                <SignupForm valid={valid} setValid={setValid}/>
            </div>
        </div>
    )
}

export default SignupPage