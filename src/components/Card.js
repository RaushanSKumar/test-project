import React from "react"; 
import "../Css/jumbo.css";

const Card =({title, saving, offpercent, customCard, className1, className2, price, newPrice, savingColor})=>{
    return(
        <div className={customCard}>
       <div className="container">
       <span className= {className1}>&#9734;  Most Popular  &#9734;</span>
        <div className="row">
            <div className="col col-xs-10 ">
                <h5 className="font my-2">{title}</h5>
               
               
                <p className={savingColor} >saving &#8377;{saving}</p> 
                <div className="row container">
                    <p className="offPercent">{offpercent}% Saved</p>
                    <p className={className2}>Best Results</p>
                </div>
                </div>
            
            <div className="  p-3">
               <div> <span className="font" >&#8377;{newPrice}</span> </div>
                <div><span className="deprication" >&#8377;{price}</span></div>
            </div>
        </div>
       </div>
    </div>
    )
}

export default Card;