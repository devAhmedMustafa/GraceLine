import React, { MutableRefObject, useEffect, useRef } from "react";

const InfOnHover : React.FC<{text: string}> = ({text})=>{

    const ref = useRef<HTMLDivElement>();

    useEffect(()=>{
        const parent = ref.current?.parentElement;
        parent?.classList.add('relative')

        const showDetails = ()=>{
            ref.current?.classList.remove('invisible');
            ref.current?.classList.remove('opacity-0');
        }

        const hideDetails = ()=>{
            ref.current?.classList.add('opacity-0');
            ref.current?.classList.add('invisible');
        }

        parent?.addEventListener('mouseover', showDetails);
        parent?.addEventListener('mouseout', hideDetails);

        return ()=>{
            parent?.removeEventListener('mouseover', showDetails);
            parent?.removeEventListener('mouseout', hideDetails);
        }
    }, [])

    return (
        <div ref={ref as MutableRefObject<HTMLDivElement>} className="absolute transition-opacity opacity-0 bg-neutral-950 text-white px-2 py-1 duration-700 invisible -left-1/2 max-w-96 whitespace-nowrap">
            {text}
        </div>
    )
}

export default InfOnHover;