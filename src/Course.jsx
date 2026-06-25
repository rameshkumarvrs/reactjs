




function Course(props) {

  

     return(
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p> {props.price} </p>
            <p> {props.rating} </p>
        </div>
        
    );


   
}

export default Course