import React, { useState } from "react";
import DrawStateContext, { DrawTools } from '../contexts/DrawStateContext'
import ToolBar from '../components/organisms/containers/ToolsBar'
import CanvasHolder from '../components/organisms/containers/CanvasHolder'
import Board from '../components/organisms/containers/Board'
import Pen from '../components/molecules/tools/Pen'
import Shapes from '../components/molecules/tools/Shapes'

const SingleDocumentPage : React.FC = ()=>{

    const [drawState, setDrawState] = useState(DrawTools.select);

    return (
        <div>
            <DrawStateContext.Provider value={{drawState, setDrawState}}>

                <ToolBar/>

                <CanvasHolder>

                    <Board>

                    {drawState === DrawTools.pen && <Pen/>}
                    {drawState === DrawTools.shapes && <Shapes/>}
                    
                    </Board>

                </CanvasHolder>

            </DrawStateContext.Provider>
        </div>
    )
}

export default SingleDocumentPage