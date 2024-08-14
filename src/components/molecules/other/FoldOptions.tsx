import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import InfOnHover from "../../atoms/other/InfOnHover"

export interface Option{
    label: string;
    callBack: ()=> void;
}

const FoldOptions : React.FC<{options?: Option[]}> = ({options})=>{

    const [isOpen, setIsOpen] = useState(false)

    const menuRef = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const handleClickOutside = (event: any) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <section ref={menuRef as any} className="relative">
            <button onClick={toggleMenu}>
                <i className='bx bx-dots-vertical-rounded text-3xl' ></i>
                <InfOnHover text="More options"/>
            </button>

            {
                isOpen &&
                <ul className="absolute bg-white shadow-lg w-56 rounded-xl overflow-hidden">
                    
                    {options?.map((o, i)=> 
                    <li key={i} onClick={o.callBack} className="cursor-pointer selection:bg-none pl-5 p-3 w-full text-start hover:bg-neutral-200">
                        {o.label}
                    </li>
                    )}

                </ul>
            }

        </section>
    )
}

export default FoldOptions