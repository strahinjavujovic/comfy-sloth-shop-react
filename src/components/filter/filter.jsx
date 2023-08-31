import React, { useContext,useEffect} from "react";
import  './filter.css';
import { PRODUCTS } from '../../products'
import { FilterContext } from "../../context/filter-context";
import FilterBy from "./filterBy/filterBy";
import SortBy from "./sortBy/sortBy";
import Article from "../article/article";


const Filter=()=>{

    const {displayAs, sortedProducts, name, category, company, color, currentPrice, shipping , setDisplayedArticles} = useContext(FilterContext);
    
    useEffect(() => { 
            setDisplayedArticles(numberOfDisplayedArticles);
          });

          let numberOfDisplayedArticles;
   
        if (shipping===false) {
            numberOfDisplayedArticles = PRODUCTS.filter(product =>  product.price < currentPrice && product.productName.includes(name) && product.category.includes(category) && product.company.includes(company) && product.colors.includes(color)).length;
            return(
                <div className="filter">
                <FilterBy   />
                <div className="catalog">
                <SortBy />
                    <div className={displayAs ? "articless, one-by-one" : "articless, in-row"} id='display'>
                        {sortedProducts.filter(product =>  product.price < currentPrice && product.productName.includes(name) && product.category.includes(category) && product.company.includes(company) && product.colors.includes(color)).map(((filteredProduct,index)=>  
                           <Article
                           key={index}
                            data={filteredProduct}
                            />
                            ))}
                        </div>
                    </div>
                </div>
            );
                    }
            else {
                numberOfDisplayedArticles = PRODUCTS.filter(product => product.freeShiping ===true && product.price < currentPrice && product.productName.includes(name) && product.category.includes(category) && product.company.includes(company) && product.colors.includes(color)).length;
                return(
                    <div className="filter">
                    <FilterBy  />
                    <div className="catalog">
                    <SortBy/>
                         <div className={displayAs ? "articless, one-by-one" : "articless, in-row"} id='display'>
                            {sortedProducts.filter(product => product.freeShiping ===true && product.price < currentPrice && product.productName.includes(name) && product.category.includes(category) && product.company.includes(company) && product.colors.includes(color)).map(((filteredProduct, index)=>
                                <Article
                                key={index}
                                data={filteredProduct}
                                />))}
                        </div>
                    </div>
                </div>
                );
            }
}
export default Filter;