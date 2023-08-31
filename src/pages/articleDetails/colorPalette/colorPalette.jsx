import React from "react";
import  './colorPalette.css';
import Color from "./color/color";




const ColorPalette=(props)=>{

    //const [removedFirstEl, setRemovedFirstEL] = useState( [...colors.slice(1)]);

   

const obj = props.data ;

const colors = obj.colors;

const removedFirstEl = [...colors.slice(1)];


    return(
        <div className="colorPalette">
                    {removedFirstEl.map(((color, index)=>

                        <Color 
                            color={color}
                            id={index}
                            key={index}
                            objId={obj.id}
                        />
                    ))}
        </div>
    );
}
export default ColorPalette;