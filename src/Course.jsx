import HTML from './assets/174854.png'


const course = "Html5"

function Course(props) {
    return(
        <div className="card">
            <img src={HTML} alt="" />
            <h3>{props.name}</h3>
            <p> {props.description} </p>
        </div>
    );
}

export default Course