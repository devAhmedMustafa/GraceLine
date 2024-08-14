export default function SetRadii({setBorderRadius, borderRadius} : any){

    const multiplier = 10;
    const max = 20*multiplier;

    return (
        <div className="flex gap-3 pl-3 items-center relative">
            <input id="radii" type="range" min="0" max={max} step="1"
            onChange={(e)=>setBorderRadius(e.target.value)} value={borderRadius} />
            <label className="b-radius-in selection:bg-none" htmlFor="radii">{borderRadius}px</label>

            <div className="w-5 h-5 border-2 border-black border-preview">

            </div>
        </div>
    )
}