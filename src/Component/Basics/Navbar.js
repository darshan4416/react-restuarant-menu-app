
import React from 'react'

const Navbar = ({filterItem,uniqueList,allItem}) => {
    //console.log("navbar.js",{uniqueList});
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">
                <button className="btn-group__item" 
                            onClick={()=>allItem("All")}>
                            All</button>
                    {uniqueList.map(elem => {
                        console.log("na",elem);
                        return (
                            <button className="btn-group__item" 
                            onClick={()=>filterItem(elem)}>
                            {elem}</button>
                        )
                    })}
                   

                </div>
            </nav> 
        </>
    )
}

export default Navbar
