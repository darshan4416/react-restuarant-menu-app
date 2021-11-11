
import React, {useState} from "react";
import MenuCard from "./MenuCard";
import "./style.css"
import Menu from "./MenuApi"
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map(elem => elem.category))];
console.log(uniqueList);

const Resturant = ()=>{
    const [menuData,setmenuData] = useState(Menu);
   
    //console.log(menuData,setmenuData);

    const filterItem = (category)=>{
       const updatedList =  Menu.filter((currElem)=>{
            //console.log(currElem.category);
            return currElem.category === category;
        });
        
        setmenuData(updatedList);
    }
    const allItem = ()=>{
        setmenuData(Menu);
    }
    return (
        <>
            <Navbar filterItem={filterItem} uniqueList={uniqueList} allItem={allItem} />
            <MenuCard menuData={menuData} />
        </>
    )
};

export default Resturant;