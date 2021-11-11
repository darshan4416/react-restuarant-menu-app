import React, {useState} from 'react'

const MenuCard = ({menuData}) => {
    
    //console.log(menuData);
    return (
        <>
         <section className="main-card--cointainer">
        {menuData.map(currElem => {
            const {id,name ,category, image, description} = currElem;
            return (
                <>
                <div className="card-container" key={id}>
                    <div className="card" key={id+1}>
                        <div className="card-body" key={id+2}>
                            <span className="card-number card-circle subtle">{id}</span>
                            <span className="card-author subtle">{category}</span>
                            <h2 className="card-title">{name}</h2>
                            <span className="card-description subtle" key={id+3}>
                               {description}
                            </span>
                            <div className="card-read"key={id+4}>Read</div>
                        </div>
                        <img src={image} alt="images" className="card-media"key={id+5}/> 
                       <span className="card-tag subtle"key={id+6}>Order Now</span>
                   </div>
                </div>
           </>
            );
        })}
          
        </section>
        </>
    );
};

export default MenuCard


