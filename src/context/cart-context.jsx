import React, { createContext ,useState } from "react";
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    
        let cart = {};
        for(let i=1;i< PRODUCTS.length+1;i++){
            cart[i]=0;
           
        }
        return cart;
};

const getDefaultColorSelected = () => {
    
    let selectedColorArray = {};
    for(let i=1;i< PRODUCTS.length+1;i++){
        selectedColorArray[i]=PRODUCTS[i-1].colors[1];
       
    }
    return selectedColorArray;
};

export const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart);
    const [itemsInCart, setItemsInCart]= useState(0);
    const [selectedColor, setSelectedColor]= useState(getDefaultColorSelected);
    const [shippingFe, setShippingFe]= useState(5.34);

    const increaseItemsInCart = () => {

        setItemsInCart(itemsInCart+1);
    }

    const decreaseItemsInCart = () => {

        setItemsInCart(itemsInCart-1);
    }

    const setSelectedColorHandle = (itemId, color) => {

        setSelectedColor((prev)=>({...prev,[itemId]: PRODUCTS[itemId-1].colors[color+1]}));//
    }

    const addToCart=(itemId) => {
        let obj=PRODUCTS.find((product)=> product.id === itemId);
        if(obj.available>cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]: prev[itemId] + 1}));
        }
    }

    const removeFromCart=(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]: prev[itemId] - 1}));
    }

    const updateCartItemCount=(itemId,newAmount) =>{
        setCartItems((prev)=>({...prev, [itemId]: newAmount}));   
    }

    const getTotalCartAmount=()=>{
        let sum=0;
        for(let i=1;i< PRODUCTS.length+1;i++){
            let itemInfo= PRODUCTS.find((product) => product.id === i)
            sum+=itemInfo.price*cartItems[i];
        }
        return sum;
    }
    
    const getSubtotalForItem = ( itemId, price ) => {

        return price*cartItems[itemId];
    }
    
    const deleteItemFromCart = (itemId) => {

        setCartItems((prev)=>({...prev, [itemId]: 0}));  
        decreaseItemsInCart(); 
    }

    const deleteCartItems = () => {

        setCartItems(getDefaultCart);
        setSelectedColor(getDefaultColorSelected);
        setItemsInCart(0);
    }

    const contextValue= {shippingFe,itemsInCart,increaseItemsInCart,decreaseItemsInCart,deleteCartItems,setSelectedColorHandle,selectedColor,cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getSubtotalForItem, deleteItemFromCart};

    
    return <ShopContext.Provider value={contextValue}>
            {props.children}
            </ShopContext.Provider>;
}