import React from "react";
import SelectedPage from "../../components/selectedPage/selectedPage";
import Filter from "../../components/filter/filter";
const Products=()=>{

    return(
        <div>
            <SelectedPage page="Products"/>
            <Filter/>
        </div>
    );
}
export default Products;