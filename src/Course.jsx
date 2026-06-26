import { useState } from "react";





function Course(props) {

    //let purchased =  false

    const [purchased, setPurchased] = useState(false)
  
  function handleClick(val, e) {

   console.log(e)
   setPurchased(true)
  }


     return(
       props.name && <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p> {props.price} </p>
            <p> {props.rating} </p>
            <button onClick={(event) => handleClick("ramesh", event)} >Clisck me da</button>
            <p>{purchased ? "you have aready purchased" : "buy now" }</p>
        </div>
        
    );


   
}

export default Course