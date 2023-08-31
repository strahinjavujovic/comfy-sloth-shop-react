import React, {useContext} from "react";
import  './color.css';
import { ArticleSelect } from "../../../../context/articleSelect-context";
import { Check } from "phosphor-react";



const Color=(props)=>{

    const {selectColorHandle, selectedColor } = useContext(ArticleSelect);


    const color=props.color;
    var index= props.id;
    var objId = props.objId;


    return(
        <div className="color">   
            <button id={index} onClick={()=>selectColorHandle(index, objId)} style={{'backgroundColor':`${color}`}} ><Check className={ index === selectedColor ? 'activeColor ' : ''} size={20} color="#fff" weight="bold" id='checkIcon'/></button>
        </div>
    );
}
export default Color;