import React, {useContext} from "react";
import './item.css';
import { Trash } from "phosphor-react";
import { Minus } from "phosphor-react";
import { Plus } from "phosphor-react";
import { ShopContext } from "../../../context/cart-context";


const Item=(props)=>{
    
    const {id, productName, price, productImage}=props.data;
    const { cartItems, getSubtotalForItem, deleteItemFromCart, selectedColor, addToCart, removeFromCart} = useContext(ShopContext);
   
    return(
        <div className="item">
            <div className="image-name-color">
                <div className="image">
                    <img src={productImage} alt="" />
                </div>
                <div className="name-color">
                   <p>{ productName }</p> 
                   <div className="color-paragraph"> color : <div className="color-div" style={{ backgroundColor: selectedColor[id] }}></div> </div> 
                </div>
            </div>
            <div className="item-price">
                <p>$ { price }</p>
            </div>
            <div className="item-quantity">
                <Minus size={24}  weight="bold" onClick={()=>removeFromCart(id)}/>
                    <p>{cartItems[id]}</p>
                <Plus  size={24}  weight="bold" onClick={()=>addToCart(id)} />
            </div>
            <div className="item-subtotal">
                {getSubtotalForItem(id, price).toFixed(2)}
            </div>
           <div className="item-button-delete">
                <Trash onClick={()=>deleteItemFromCart(id)} size={28} color="red" weight="duotone" />
           </div>
        </div>
       
    );
};
export default Item;