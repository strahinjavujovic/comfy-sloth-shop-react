import React from "react";
import './article.css';
import { Link } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
const Article=(props)=>{
    const {productName, price, productImage}=props.data;
    
    return(
    
        <div className="article">
            <div className="image">
                <img src={productImage}/>
                <div className="hover-search">
                    <div className="search">
                        <Link to='/products'><MagnifyingGlass size={25} weight="bold" /></Link>
                    </div>
                </div>
            </div>
            <div className="info">
                <p className="name">
                    {productName}
                </p>
                <p className="price">
                    $ {price}
                </p>
            </div>
            
        </div>
       
    );
};
export default Article;