import { ReactNode, useContext, useEffect, useState } from "react"
import RectLayer from "../../molecules/layers/RectLayer.js"
import LayersContext from "../../../contexts/LayersContext.js"
import ILayer from "../../../interfaces/Layers/ILayer.js"
import ILayerData from "../../../interfaces/DrawData/ILayerData.js"
import { LayerType } from "../../../utils/Types/LayerType.js"
import IRectLayer from "../../../interfaces/Layers/IRectLayer.js"
import FreeHandLayer from "../../molecules/layers/FreehandLayer.js"
import IFreehandLayer from "../../../interfaces/Layers/IFreehandLayer.js"
import SingleDocumentContext from "../../../contexts/SingleDocumentContext.js"

const Board : React.FC<{children: ReactNode,}> = ({children})=>{

    const {document, setDocument} = useContext(SingleDocumentContext)
    const [layers, setLayers] = useState<ILayer<ILayerData>[]>(document.layers!)

    useEffect(()=>{
        if (document)
            setLayers(document.layers!)
    }, [])
    
    useEffect(()=>{
        if (document){
            setDocument({...document, layers: layers})
        }
    }, [layers])


    return (
        <LayersContext.Provider value={{layers: layers, setLayers}}>

            <div className="draw-layer">
                {children}

                <div>

                {
                    layers?.map((l, id)=> {
                        if (l==null) return
                        if (l.props.type === LayerType.RECT) return <RectLayer key={id} layer={l as IRectLayer}/>
                        if (l.props.type === LayerType.FREEHAND) return <FreeHandLayer key={id} layer={l as IFreehandLayer}/>
                    }
                    )
                }
                </div>
            </div>

        </LayersContext.Provider>
    )
}

export default Board;