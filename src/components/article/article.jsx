import React from "react";
import './article.css';
import { MagnifyingGlass } from "phosphor-react";
import { useNavigate } from 'react-router-dom'



const Article=(props)=>{
    const {productName, price, productImage, about, id} =props.data;
   
    const navigate = useNavigate();
    return(
    
        <div className="article">
            <div className="image">
                <img src={productImage} alt="img"/>
                <div className="hover-search">
                    <a href='#' className="search" onClick={()=>{navigate(`/article/${id}`)}} >
                        <MagnifyingGlass size={25} weight="bold" />
                        
                    </a>
                </div>
            </div>
            <div className="info">
                <p className="name">
                    {productName}
                </p>
                <p className="price">
                    $ {price}
                </p>
                <div className="onebyone">
                    <p className="article-about">{about}</p>
                    <div className="button"><a href='#' onClick={()=>{navigate(`/article/${id}`)}} >DETAILS</a></div>
                </div>
            </div>
            
        </div>
       
    );
};
export default Article;