import ShapeShifter from "../../atoms/animated/ShapeShifter";

export default function Loader(){
    return (
        <div className="loader absolute -top-16 flex justify-center gap-6">
            <ShapeShifter/>
            <ShapeShifter/>
            <ShapeShifter/>
        </div>
    )
}