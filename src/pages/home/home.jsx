import React from "react";
import  './home.css'
import pic1 from '../../assets/home/hero-bcg-2.789918645915c8acb36f.jpeg';
import pic2 from '../../assets/home/hero-bcg.a876f19f6786a3aca992.jpeg';

import Article from "../../components/article/article";
import {PRODUCTS} from './products-for-home-page';
const Home=()=>{

    return(
        <div className="home">
           <div className="first-content">
                <div className="info">
                    <h1>
                        design your comfort zone
                    </h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                    </p>
                    <button>shop now</button>
                </div>
                <div className="pictures">
                    <div className="empty-div"></div>
                    <img className="bigger-pic" src={pic2}/>
                    <img className="smaller-pic" src={pic1}/>
                </div>
           </div>
           <div className="back-color">
                <div className="second-content">
                        <div className="title">
                            <h1>featured products</h1>
                            <div className="underline"></div>
                        </div>
                        <div className="articles">
                            {PRODUCTS.map((product=>
                            <Article
                            data={product}
                            />))}
                        </div>
                        <div className="button">
                            <button>all products</button>
                        </div>
                </div>
           </div>
        </div>
    );
}
export default Home;