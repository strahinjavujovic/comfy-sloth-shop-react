import React, { createContext ,useState, useContext} from "react";
import { ShopContext } from "./cart-context";

export const ArticleSelect = createContext(null);

export const ArticleSelectProvider = (props) =>{

  const [selectedColor, setSelectedColor]= useState(0);
 
  const { setSelectedColorHandle } = useContext(ShopContext);

    const selectColorHandle = (num,objId) => {

        const matches = document.querySelectorAll('#checkIcon');
        for(var i=0;i<matches.length-1;i++){
            matches[i].classList.remove('activeColor');
            
        }
        setSelectedColor(num);
        setSelectedColorHandle(objId,num);
    }
    
    

    const contextValue= {selectColorHandle,selectedColor};

    
    return <ArticleSelect.Provider value={contextValue}>
            {props.children}
            </ArticleSelect.Provider>;
}