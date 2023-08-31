import React,{useState,useContext} from "react";
import  './navbar.css'
import { Link } from "react-router-dom";
import { List } from "phosphor-react";
import { ShoppingCart } from "phosphor-react";
import { UserPlus } from "phosphor-react";
import { X } from "phosphor-react";
import logo from '../../assets/logo.jpg';
import useLockScroll from '../../myHooks/useLockScroll';
import { ShopContext } from "../../context/cart-context";


 const Navbar=()=>{
    const [showMenu,setShowmenu]=useState(false);
    const { lockScroll, unlockScroll } = useLockScroll();
    const {  itemsInCart } = useContext(ShopContext);
    return(
        <div className="navbar">
            <div className="logo"> 
                <img src={logo} alt="test"/>
            </div>
            <div  className="links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
            </div>
            <div className="icons">
                <Link className="cart-count" to='/cart'>Cart <ShoppingCart className="line" size={23}/>
                <span>{itemsInCart}</span>
                </Link>
                <Link>Login <UserPlus className="line" size={23}/> </Link>
            </div>
            <Link className="toggle-button" onClick={event=>{setShowmenu(!showMenu);lockScroll()}}><List  size={35} weight="bold"/></Link>
        
        <div className={showMenu ? "expanded-menu open" : "expanded-menu"}>
            <div>
                <Link className="close-button"><X  size={32} weight="bold" onClick={event=>{setShowmenu(!showMenu);unlockScroll()}}></X></Link>
            </div>
            <div className="logo2">
                 <img src={logo} alt="test"/>
            </div>
            <div className="links2">
                <Link to='/' onClick={event=>{setShowmenu(false);unlockScroll()}}>Home</Link>
                <Link to='/about' onClick={event=>{setShowmenu(false);unlockScroll()}}>About</Link>
                <Link to='/products' onClick={event=>{setShowmenu(false);unlockScroll()}}>Products</Link>
            </div>
            <div className="icons2">
                <Link className="cart-count">Cart <ShoppingCart className="line" size={23}/>
                <span>{itemsInCart}</span>
                </Link>
                <Link>Login <UserPlus className="line" size={23}/> </Link>
            </div>
        </div>

        </div>
        
    );
}
export default Navbar;
