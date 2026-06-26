import { useState } from 'react';
import html from './assets/174854.png'
import css from './assets/css.png'
import js from './assets/js.png'


import Course from './Course';


function CourseList() {

    const [courses, setCourses] = useState([

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
            name: "Reactjs",
            price: 199,
            image: js,
            rating: 3,

        }

    ])


    function handleDelete(id){
        const new_courses = courses.filter((course) => id != course.id )
        setCourses(new_courses)
    }


    //courses.sort((x,y) => y.price - x.price )

    //const vfmCourses = courses.filter((cou) => cou.name != "Css full course")

    //courses.sort((x,y) => x.rating-y.rating)

    const coursesList = courses.map((course) => 
      <Course 
      key = {course.id}
      name={course.name} 
      price= {course.price} 
      image={course.image} 
      rating={course.rating}
      id = {course.id}
      delete = {handleDelete}
      />

    )

    return(
       <>
         <div>{coursesList}</div>
       </>
    );
    
}

export default CourseList