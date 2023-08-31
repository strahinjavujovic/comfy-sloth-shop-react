import React,{  useContext } from "react";
import  './sortBy.css';
import { FilterContext } from "../../../context/filter-context";
import { SortAscending } from "phosphor-react";
import { SquaresFour } from "phosphor-react";

const SortBy=()=>{


const { displayAsHandle, displayAs ,displayedArticles,sortByHandle} = useContext(FilterContext);


    return(
        <div className="sortBy">
            <SquaresFour size={64}  weight="duotone" onClick={displayAsHandle} className={displayAs ? 'displayNotActive' : 'displayActive'}/>
            <SortAscending size={64}  weight="duotone" onClick={displayAsHandle} className={displayAs ? 'displayActive' : 'displayNotActive'}/>
            <p>{displayedArticles} Products Found </p>
            <hr></hr>
            <label>Sort By</label> 
            <select name="sort" id="sortBy" onChange={sortByHandle}>
                <option value="1">Price (Lowest)</option>
                <option value="2">Price (Highest)</option>
                <option value="3">Name (A - Z)</option>
                <option value="4">Name (Z - A)</option>
            </select>
        </div>
    );
}
export default SortBy;