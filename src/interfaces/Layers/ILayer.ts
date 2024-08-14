import vector2 from "../../utils/Math/vector2";

export default interface ILayer<TDrawData>{
    id: number;
    position: vector2;
    size: vector2;
    props: TDrawData;
}