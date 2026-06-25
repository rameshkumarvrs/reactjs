import html from './assets/174854.png'
import css from './assets/css.png'
import js from './assets/js.png'


import Course from './Course';


function CourseList() {

    const courses = [

        {
            name: "Htmlfull course",
            price: 199,
            image: html,
            rating: 5,

        },

        {
            name: "Css full course",
            price: 299,
            image: css,
            rating: 4,

        },

        {
            name: "JS full course",
            price: 199,
            image: js,
            rating: 3,

        }

    ]

    const coursesList = courses.map((course) => 
      <Course 
      name={course.name} 
      price= {course.price} 
      image={course.image} 
      rating={course.rating}/>

    )

    return(
       <>
         <div>{coursesList}</div>
       </>
    );
    
}

export default CourseList