import React from "react";
import styles from "./DocumentsSideBar.module.css"
import AddDocumentButton from "../../atoms/buttons/AddDocumentButton";

const DocuementsSideBar : React.FC = ()=>{
    return (
        <div className="bg-[#ececec3a] w-fit h-full container-padding flex flex-col shadow-2xl justify-between">
            

            <div className="flex flex-col gap-4 items-start">

                <button className={styles.secBtn}>
                    <i className='bx bx-time-five' ></i>
                    <p>Recent</p>
                </button>

                <button className={styles.secBtn}>
                    <i className='bx bx-star'></i>
                    <p>Starred</p>
                </button>

                <button className={styles.secBtn}>
                    <i className='bx bx-windows'></i>
                    <p>Documents</p>
                </button>


            </div>

            <AddDocumentButton/>
        </div>
    )
}

export default DocuementsSideBar