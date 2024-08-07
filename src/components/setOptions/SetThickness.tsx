export default function SetThickness({thickness, setThickness} : any){

    return (
        <div className="flex gap-3 px-3 items-center border-r-[1px] ">
            <input id="thickness" type="range" min="0" max="20" step="1"
            onChange={(e)=>setThickness(e.target.value)} value={thickness}/>
            <label className="thickness-in selection:bg-none" htmlFor="thickness">{thickness}px</label>
        </div>
    )
}