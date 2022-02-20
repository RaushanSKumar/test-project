import React from "react"; 
import "../Css/jumbo.css";
import Card from "./Card";
import { FaShoppingCart } from 'react-icons/fa';
const Jumbo = () => {
    return(
        <div>
           <hr className="solid"/>
            <div className="container">
                <img className="img-fluid"
                 src='https://images.unsplash.com/photo-1620275765334-4ed948bb4502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                 alt="product"
                />
            </div> 
           <div className="container py-5">
           <h3 className="title">Everyday rinse and reload</h3> 
           <p className="details py-2">Achieve your dream skin goal with this complete package of skincare products that will rejuvenate your day.</p> 
           <div className="row container">   
           <div>
           <span class="badge badge-secondary custom-badge">&#9734; &#9734; &#9734; &#9734; </span></div>  
           <h4 className="mx-2 rating">4</h4> 
           <p>click to read reviews </p>
           </div> 

           <div className="row container py-3"><h3 className="font ">&#8377;800</h3> <h3 className="deprication mx-3"> &#8377;1799 </h3></div>
            <Card className1={"badge badge-secondary custom-badge1 my-2"}
             title={"1 Months Pack(4 tubes)" }
             saving={200} 
             offpercent={38}
             className2={"mx-3 bestResult"} 
             price={795} 
             newPrice={595} 
             customCard={"card card-bg my-2"} 
             savingColor={"saving-color1"}
              /> 

           <Card className1={"card-display"}
             title={"3 Months Pack(12 tubes)" }
             saving={100} 
             offpercent={12}
             className2={"card-display"} 
             price={899} 
             newPrice={999} 
             customCard={"card card-bg my-2 custom-card"} 
             savingColor={"saving-color2"}
              /> 

            <button className="btn btn-block btn-secondary my-3" type="button"><FaShoppingCart/> ADD TO CART</button>
           </div>  

          
           

        </div>
       
    ) 
} 

export default Jumbo;