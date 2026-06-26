import html from './assets/174854.png'
import css from './assets/css.png'
import js from './assets/js.png'


import Course from './Course';


function CourseList() {

    const courses = [

        {
            id: 1,
            name: "Htmlfull course",
            price: 199,
            image: html,
            rating: 5,

        },

        {
            id: 2,
            name: "Css full course",
            price: 299,
            image: css,
            rating: 4,

        },

        {
            id: 3,
            name: "JS full course",
            price: 199,
            image: js,
            rating: 3,

        },

        {
            id: 4,
            name: "",
            price: 199,
            image: js,
            rating: 3,

        }

    ]


    //courses.sort((x,y) => y.price - x.price )

    //const vfmCourses = courses.filter((cou) => cou.name != "Css full course")

    //courses.sort((x,y) => x.rating-y.rating)

    const coursesList = courses.map((course) => 
      <Course 
      key = {course.id}
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