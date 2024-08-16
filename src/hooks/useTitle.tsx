import { useEffect } from "react"

const mainTitle = "Grace Line"

const useTitle = (title: string)=>{
    const changeTitle = ()=>{
        document.title = title + " - " + mainTitle
    }

    useEffect(()=>{
        changeTitle()
    }, [title])
}

export default useTitle;