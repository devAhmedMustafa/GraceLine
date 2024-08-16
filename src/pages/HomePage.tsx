import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage : React.FC = ()=>{

    const navigate = useNavigate();

    useEffect(()=>{
        navigate('/documents')
    }, [])

    return (
        <div>

        </div>
    )
}

export default HomePage