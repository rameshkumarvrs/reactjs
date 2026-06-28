import { useState, useEffect } from 'react';



import Course from './Course';
import useFetch from './useFetch';


function CourseList() {

   
   const [courses, error, setCourses] = useFetch("http://localhost:3001/courses")

    function handleDelete(id){
        const new_courses = courses.filter((course) => id != course.id )
        setCourses(new_courses)
    }

    
    

    //courses.sort((x,y) => y.price - x.price )

    //const vfmCourses = courses.filter((cou) => cou.name != "Css full course")

    //courses.sort((x,y) => x.rating-y.rating)

    if(!courses){
        return(
            <>
            {!error && <img src="/assets/loading.gif" alt="" />}
            {error && <p>{error}</p>}
            </>
        )
    }

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

//npx json-server --watch data/dummyData.json --port 3001 --static ./data