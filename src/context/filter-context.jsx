import React, { createContext ,useState } from "react";
import { PRODUCTS } from "../products";
export const FilterContext = createContext(null);

export const FilterByProvider = (props) =>{

    const [sortedProducts,setSortedProducts] = useState([...PRODUCTS].sort((a, b) => a.price - b.price));
    const [sortBy,setSortBy]= useState('1');
    const [displayAs,setDisplayAs]= useState(false);
    const [displayedArticles, setDisplayedArticles] = useState(0);
    const [name,setName]= useState('');
    const [category, setCategory] = useState('');
    const [company,setCompany]= useState('');
    const [color,setColor]= useState('all');
    const [currentPrice, setCurrentPrice]= useState(3100.00);
    const [shipping, setShipping]= useState(false);

    const inputHandle = (event) =>{
        setName(event.target.value.toLowerCase());
    }
    
    const categorySelectHandle = (num)=>{
        switch(num){
            case 1:setCategory('');break;
            case 2:setCategory('office');break;
            case 3:setCategory('living-room');break;
            case 4:setCategory('kitchen');break;
            case 5:setCategory('bedroom');break;
            case 6:setCategory('dining');break;
            case 7:setCategory('kids');break;
            default:break;
        }

    const matches= document.querySelectorAll('button');
    for(var i=0;i<7;i++){
        matches[i].classList.remove('active');
    }
    document.getElementById(num).classList.add('active');
    }

    const companySelectHandle= (event) => {
        if(event.target.value==='all')
           setCompany('');
        else
            setCompany(event.target.value);
    }

    const colorSelectHandle = (num)=>{
        switch(num){
            case 8:setColor('all');break;
            case 9:setColor('red');break;
            case 10:setColor('green');break;
            case 11:setColor('blue');break;
            case 12:setColor('black');break;
            case 13:setColor('yellow');break;
            default:break;
        }
        if(num===8){
            document.querySelector('.all').classList.toggle('active');
            const matches= document.querySelectorAll('.check');
            for(var i=0;i<5;i++){
                matches[i].classList.remove('activeColor');
            }
        }
        else {
            document.querySelector('.all').classList.remove('active');
            const matches= document.querySelectorAll('.check');
            for(i=0;i<5;i++){
                matches[i].classList.remove('activeColor');
            }
            document.getElementById(num).classList.add('activeColor');
        }
    }

    const priceRangeHandle=(event)=>{
        setCurrentPrice(event.target.value);
    }

    const shippingHandle=()=>{
        setShipping((current)=> !current);
    }

    const clearFiltersHandle=()=>{
        setName('');
        setCategory('');
        setCompany('');
        setColor('all');
        setCurrentPrice(3100.00);
        setShipping(false);

        document.getElementById('inputName').value='';

        const matches= document.querySelectorAll('button');
        for(var i=0;i<7;i++){
            matches[i].classList.remove('active');
        }
        document.getElementById('1').classList.toggle('active');

        document.getElementById('companies').value='all';

        const matchess= document.querySelectorAll('.check');
        for(i=0;i<5;i++){
            matchess[i].classList.remove('activeColor');
        }
        document.getElementById('8').classList.add('active');

        document.getElementById('inputCheckbox').checked=false;

    }

    const displayAsHandle = () => {
        setDisplayAs((current)=> !current);
    }

    const sortByHandle = (event) => {

        setSortBy(event.target.value);
        
        switch(event.target.value){

            case '1': setSortedProducts(sortedProducts.sort((a, b) => a.price - b.price));break;
            case '2': setSortedProducts(sortedProducts.sort((a, b) => b.price - a.price));break;     
            case '3':  setSortedProducts(sortedProducts.sort((a, b) => a.productName<b.productName ?  -1 : 1));break;
            case '4':  setSortedProducts(sortedProducts.sort((a, b) => a.productName>b.productName ?  -1 : 1));break;
            default:break;
        }
    }

    const contextValue= {sortedProducts,sortBy,sortByHandle,displayedArticles, setDisplayedArticles,displayAs, displayAsHandle, name, inputHandle, color, colorSelectHandle, company, companySelectHandle, clearFiltersHandle, currentPrice,priceRangeHandle,category,categorySelectHandle,shipping,shippingHandle};

    
    return <FilterContext.Provider value={contextValue}>
            {props.children}
            </FilterContext.Provider>;
}