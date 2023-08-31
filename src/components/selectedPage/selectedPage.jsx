import React from "react";
import  './selectedPage.css';
import { Link } from "react-router-dom";
import useLockScroll from "../../myHooks/useLockScroll";

const SelectedPage=(props)=>{
    const { unlockScroll } = useLockScroll();
    return(
        <div className="selectedPage">
            <div className="contents">
                <Link to='/' onClick={()=>unlockScroll()}>Home&nbsp;</Link>
                <p>/ {props.page}</p>
            </div>
        </div>
    );
}


export default SelectedPage;