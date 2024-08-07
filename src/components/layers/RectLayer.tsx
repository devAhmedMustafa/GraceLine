import React from 'react'
import useLayer from '../../hooks/useLayer'
import ILayer from '../../interfaces/Layers/ILayer'
import IRectData from '../../interfaces/DrawData/IRectData'
import Rectangular from '../../utils/draw objects/Rectangular'
import vector2 from '../../utils/Math/vector2'

interface IRect{
    layer: ILayer<IRectData>
}

const RectLayer : React.FC<IRect> = ({layer}) => {

    const position = new vector2(layer.position.x, layer.position.y);
    const size = new vector2(layer.size.x, layer.size.y)

    const rect = new Rectangular(
        position, 
        size, 
        layer.props.color,
        layer.props.strokeColor,
        layer.props.strokeThickness,
        layer.props.radii
    )
    const {Layer} = useLayer<IRectData>(layer, rect)

    return (
        <Layer>

        </Layer>
    )
}

export default RectLayer