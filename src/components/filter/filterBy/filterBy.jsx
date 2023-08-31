import React,{  useContext } from "react";
import  './filterBy.css';
import { FilterContext } from "../../../context/filter-context";
import { Check } from "phosphor-react";



const FilterBy=()=>{


const { inputHandle, colorSelectHandle, categorySelectHandle, companySelectHandle, currentPrice,
        priceRangeHandle, shipping, shippingHandle, clearFiltersHandle, category, company, color, name} = useContext(FilterContext);


    return(
        <div className="filterby">
           <input type="text" placeholder="Search" id="inputName" onChange={inputHandle} value={name}/>
           <h5>Category</h5>
           <div className="category">
                <button id='1' className={category === "" ? "active" : ""} onClick={()=>categorySelectHandle(1)}>All</button>
                <button id='2' className={category === "office" ? "active" : ""} onClick={()=>categorySelectHandle(2)}>Office</button>
                <button id='3' className={category === "living-room" ? "active" : ""}onClick={()=>categorySelectHandle(3)}>Living Room</button>
                <button id='4' className={category === "kitchen" ? "active" : ""}onClick={()=>categorySelectHandle(4)}>Kitchen</button>
                <button id='5' className={category === "bedroom" ? "active" : ""}onClick={()=>categorySelectHandle(5)}>Bedroom</button>
                <button id='6' className={category === "dining" ? "active" : ""}onClick={()=>categorySelectHandle(6)}>Dining</button>
                <button id='7' className={category === "kids" ? "active" : ""}onClick={()=>categorySelectHandle(7)}>Kids</button>
           </div>
           <div>
           <h5>Company</h5>
            <select name="company" id="companies" value = {company} onChange={companySelectHandle} >
                    <option value="all">all</option>
                    <option value="marcos">marcos</option>
                    <option value="liddy">liddy</option>
                    <option value="ikea">ikea</option>
                    <option value="caressa">caressa</option>
                </select>
            </div>
            <div>
                <h5>Colors</h5>
                <div className="colors">
                    <button  onClick={()=>colorSelectHandle(8)} className={ color === 'all' ? 'active all' : 'all'}  id='8'>All</button>
                    <button  onClick={()=>colorSelectHandle(9)}style={{'backgroundColor':"red"}} ><Check size={12} color="#fff" weight="bold" id='9' className={ color === 'red' ? 'check activeColor' : 'check'} /></button>
                    <button  onClick={()=>colorSelectHandle(10)}style={{'backgroundColor':"green"}} ><Check size={12} color="#fff" weight="bold"id='10' className={ color === 'green' ? 'check activeColor' : 'check'}/></button>
                    <button  onClick={()=>colorSelectHandle(11)}style={{'backgroundColor':"blue"}} ><Check size={12} color="#fff" weight="bold" id='11' className={ color === 'blue' ? 'check activeColor' : 'check'}/></button>
                    <button  onClick={()=>colorSelectHandle(12)} style={{'backgroundColor':"black"}} ><Check size={12} color="#fff" weight="bold"id='12' className={ color === 'black' ? 'check activeColor' : 'check'}/></button>
                    <button  onClick={()=>colorSelectHandle(13)}style={{'backgroundColor':"#ffb900"}} ><Check size={12} color="#fff" weight="bold" id='13' className={ color === 'yellow' ? 'check activeColor' : 'check'}/></button>
                </div>
            </div>
            <div className="price">
                <h5>Price </h5>
                <p>$ {currentPrice}</p>
                <input type="range" name="price" min="0" max="3100.00" value={currentPrice} onChange={priceRangeHandle}></input>
            </div>
            <div className="shipping">
                <label>Free Shipping</label><input id='inputCheckbox' type="checkbox" onChange={shippingHandle} value={shipping} checked={shipping}></input>
            </div>
            <div className="button-clear">
                <button onClick={clearFiltersHandle}>Clear Filters</button>
            </div>
        </div>
    );
}
export default FilterBy;