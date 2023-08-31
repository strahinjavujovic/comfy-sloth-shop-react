import React from "react";
import  './home.css'
import pic1 from '../../assets/home/hero-bcg-2.789918645915c8acb36f.jpeg';
import pic2 from '../../assets/home/hero-bcg.a876f19f6786a3aca992.jpeg';

import Article from "../../components/article/article";
import {PRODUCTS} from '../../products';

import { Compass } from "phosphor-react";
import { SketchLogo  } from "phosphor-react";
import { Scroll  } from "phosphor-react";

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
                    <a href="/products">shop now</a>
                </div>
                <div className="pictures">
                    <div className="empty-div"></div>
                    <img className="bigger-pic" src={pic2} alt="big"/>
                    <img className="smaller-pic" src={pic1} alt="small"/>
                </div>
           </div>
           <div className="back-color">
                <div className="second-content">
                        <div className="title">
                            <h1>featured products</h1>
                            <div className="underline"></div>
                        </div>
                        <div className="articles">
                            {PRODUCTS.filter(product => product.id === 3 || product.id === 4 || product.id === 5).map(((filteredProduct,index)=>
                            <Article
                            key={index}
                            data={filteredProduct}
                            />))}
                        </div>
                        <div className="button">
                            <a href="/products">all products</a>
                        </div>
                </div>
           </div>
           <div className="third-content">
                <div className="contents">
                        <div className="info">
                            <div className="title">
                                <h2>custom furniture built only for you</h2>
                            </div>
                            <div className="paraghraph">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
                            </div>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <div className="icon-div">
                                    <Compass size={38} />
                                </div>
                                <h3>Mission</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                            </div>
                            <div className="card">
                                <div className="icon-div">
                                <SketchLogo  size={38}/>
                                </div>
                                <h3>Vision</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                            </div>
                            <div className="card">
                                <div className="icon-div">
                                    <Scroll size={38}/>
                                </div>
                                <h3>History</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fourth-content">
                            <h2>Join our newsletter and get 20% off</h2>     
                            <div className="content">
                                <div className="text">
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
                                </div>
                                <div className="input">
                                    <input type="text" />
                                    <a href="/about">Subscribe</a>
                                </div>
                            </div>      
                </div>
        </div>
    );
}
export default Home;