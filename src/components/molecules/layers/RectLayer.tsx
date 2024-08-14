import React from 'react'
import ILayer from '../../../interfaces/Layers/ILayer'
import IRectData from '../../../interfaces/DrawData/IRectData'
import Rectangular from '../../../utils/draw objects/Rectangular'
import vector2 from '../../../utils/Math/vector2'
import Layer from './Layer'

interface IRect{
    layer: ILayer<IRectData>
}

const RectLayer : React.FC<IRect> = ({layer}) => {

    const rect = new Rectangular(
        new vector2(0, 0),
        new vector2(layer.size.x, layer.size.y), 
        layer.props.color,
        layer.props.strokeColor,
        layer.props.strokeThickness,
        layer.props.radii
    )

    return (
        <Layer layer={layer} object={rect}>
            <div></div>
        </Layer>
    )
}

export default RectLayer