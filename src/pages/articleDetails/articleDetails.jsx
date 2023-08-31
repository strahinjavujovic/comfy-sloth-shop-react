import React, { useState, useContext } from "react";
import './articleDetails.css';
import { useParams} from 'react-router-dom';
import { PRODUCTS } from "../../products";
import { Link } from "react-router-dom";
import useLockScroll from "../../myHooks/useLockScroll";
import ColorPalette from "./colorPalette/colorPalette";
import  { ArticleSelectProvider } from '../../context/articleSelect-context';
import { ShopContext } from "../../context/cart-context";
import { useNavigate } from 'react-router-dom';
import { Minus } from "phosphor-react";
import { Plus } from "phosphor-react";

import product1 from '../../assets/articleDetails/extra-product-1.jpeg';
import product2 from '../../assets/articleDetails/extra-product-2.jpeg';
import product3 from '../../assets/articleDetails/extra-product-3.jpeg';
import product4 from '../../assets/articleDetails/extra-product-4.jpeg';



const ArticleDetails=()=>{
    
      
    const params = useParams();

    const navigate = useNavigate();

    const articleDisplayHandle = () => {

        var objekat={};

        objekat = PRODUCTS[params.userId-1];

        return objekat;

    }
    const [obj] = useState(()=>{
        return articleDisplayHandle();
    });

    const {  updateCartItemCount, increaseItemsInCart} = useContext(ShopContext);
    
    const { unlockScroll } = useLockScroll();

    const [displayedPicture,setDisplayedPicture] = useState(obj.productImage);
    const [numOfSelected, setNumOfSelected] = useState(1);

    const changeDisplayedPictureHandle = (num) => {

        switch(num) {
            case 0: setDisplayedPicture(obj.productImage);break;
            case 1: setDisplayedPicture(product1);break;
            case 2: setDisplayedPicture(product2);break;
            case 3: setDisplayedPicture(product3);break;
            case 4: setDisplayedPicture(product4);break;
            default:break;
        }
    }

    const decreaseNumOfSelected = () => {
        if(numOfSelected > 1){
            setNumOfSelected(prev => prev - 1);
        }
    }

    const increaseNumOfSelected = () => {
        if(numOfSelected < obj.available ){
            setNumOfSelected(prev => prev + 1);
        }
    }

    const addToCartHandle = (id, num) => {

        updateCartItemCount(id, num);
        increaseItemsInCart();
        navigate('/cart');
    }
   
    const backToProducts = () => {
        
        navigate("/products");
       
    }
    return(
       <ArticleSelectProvider>
            <div className="articleDetails">
                <div className="selectedPage">
                    <div className="contents">
                        <Link to='/' onClick={()=>unlockScroll()}>Home&nbsp;</Link>
                        <Link to='/products' onClick={()=>unlockScroll()}>/ Products&nbsp;</Link>
                        <p>/ {obj.productName}</p>
                    </div>
                </div>
                
                <div className="container">
                    <div className="button"> <a href='#' onClick={() => backToProducts()}>back to products</a></div>
               
                    <div className="content">
                        <div className="pictures">
                            <img src={displayedPicture} alt="img" className="displayedPic"/>
                            <div className="gallery">
                                <img src={obj.productImage} alt="img"  onClick={()=>changeDisplayedPictureHandle(0)}/>
                                <img src={product1} alt="img" onClick={()=>changeDisplayedPictureHandle(1)} />
                                <img src={product2} alt="img"  onClick={()=>changeDisplayedPictureHandle(2)}/>
                                <img src={product3} alt="img" onClick={()=>changeDisplayedPictureHandle(3)} />
                                <img src={product4} alt="img" onClick={()=>changeDisplayedPictureHandle(4)} />
                            </div>
                        </div>
                        <div className="info">
                            <h2>{obj.productName}</h2>
                            <p className="price">$ {obj.price}</p>
                            <p className="about-product">{obj.about}</p>
                            <p><span>Available:</span>1</p>
                            <p><span>SKU:</span>2</p>
                            <p className="brand"><span>Brand:</span>{obj.company}</p>
                        
                            <hr></hr>

                            <div className="colors">Colors: <ColorPalette data={obj}/></div>
                            
                            <div className="adding-to-cart">
                            <section className="buttons-to-add">
                                <Minus size={24}  weight="bold" onClick={decreaseNumOfSelected}/>
                                <p>{numOfSelected}</p>
                                <Plus  size={24}  weight="bold" onClick={increaseNumOfSelected} />
                            </section>
                            <div className="button"> <a href='#' onClick={()=>addToCartHandle(params.userId, numOfSelected)}>add to cart</a></div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </ArticleSelectProvider>
       
    );
};
export default ArticleDetails;