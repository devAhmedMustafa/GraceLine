import React, { useEffect } from 'react'
import ILayer from '../../../interfaces/Layers/ILayer'
import IFreehandData from '../../../interfaces/DrawData/IFreehandData'
import Freehand from '../../../utils/draw objects/Freehand'
import Layer from './Layer'

interface IFreehand{
    layer: ILayer<IFreehandData>
}

const FreeHandLayer : React.FC<IFreehand> = ({layer}) => {

    const rect = new Freehand(
        layer.props.color,
        layer.props.thickness,
        layer.props.x,
        layer.props.y,
        layer.props.staticPosition
    )


    useEffect(()=>{
    }, [])

    return (
        <Layer layer={layer} object={rect}></Layer>
    )
}

export default FreeHandLayer