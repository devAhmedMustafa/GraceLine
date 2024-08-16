import ILayerData from "./DrawData/ILayerData";
import ILayer from "./Layers/ILayer";

export default interface IDocument{
    _id?: number | string;
    name: string;
    description?: string;
    layers?: ILayer<ILayerData>[];
    created_at?: Date;
    updated_at?: Date;
    opened_at?: Date;
}