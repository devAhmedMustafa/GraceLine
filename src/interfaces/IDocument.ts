import ILayerData from "./DrawData/ILayerData";
import ILayer from "./Layers/ILayer";

export default interface IDocument{
    id: number | string;
    name: string;
    layers: ILayer<ILayerData>[];
    createdAt?: Date;
    openedAt?: Date;
}