


const course = "Html5"

function Course(props) {

   if(props.show){

     return(
        <div className="card">
            <img src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p> {props.description} </p>
        </div>
    );

   }
   
}

export default Course