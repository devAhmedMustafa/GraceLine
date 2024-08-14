export default function SetColors({setColor, setStrokeColor} : any){
    return (
        <div className="flex gap-2 border-r-[1px] px-3">
            <label className="fill-color-in" htmlFor="fill-color"></label>
            <input id="fill-color" type="color" onChange={(e)=>setColor(e.target.value)}/>

            <label className="stroke-color-in" htmlFor="stroke-color"></label>
            <input id="stroke-color" type="color" onChange={(e)=>setStrokeColor(e.target.value)}/>
        </div>
    )
}