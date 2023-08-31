import React, { useContext  } from "react";
import './cart.css';
import { ShopContext } from "../../context/cart-context";
import Item from "./item/item";
import {PRODUCTS} from "../../products";
import { useNavigate } from 'react-router-dom';
import SelectedPage from "../../components/selectedPage/selectedPage";


const Cart=()=>{
    
    const { cartItems, getTotalCartAmount, deleteCartItems, shippingFe  } = useContext(ShopContext);
    
    const navigate = useNavigate();

    const backToProductsHandle = () => {

        navigate('/products');
    }
   
    
   
    return(
        <div className="cart">
            <SelectedPage page="Cart"/>
            
            {getTotalCartAmount() > 0 ?(
                <div className="content-cart">
                    <div className="table">
                        <div>Item</div>
                        <div>Price</div>
                        <div>Quantity</div>
                        <div>Subtotal</div>
                        
                    </div>
                    
                    <div className="items-content">
                        {PRODUCTS.map((product)=>{
                                if(cartItems[product.id] !== 0){
                                    return <Item data={product} key={product.id }/>
                                    
                                
                            }})}
                    </div>   
                     
                    <div className="buttons">
                        <a href='#' onClick={backToProductsHandle}>Continue Shopping</a>
                        <a href='#' className="clear-cart" onClick={deleteCartItems}>Clear Shopping Cart</a>
                    </div>
                    <div className="total-content">
                        <div className="total-div">
                            <div className="subtotal">
                                <div>
                                    <h5>Subtotal :</h5><h5>${getTotalCartAmount().toFixed(2)}</h5>

                                </div>
                                <div>
                                    <span>Shipping Fee :</span><span> ${shippingFe}</span>
                                </div>
                            </div>
                            <div className="order-total">
                                <h4>Order Total : </h4><h4>${(getTotalCartAmount()+shippingFe).toFixed(2)}</h4>
                            </div>
                        </div>
                    </div>
            </div>)
             :(<h1>Your Cart Is Empty!</h1>)}
        </div>
       
    );
}
export default Cart;