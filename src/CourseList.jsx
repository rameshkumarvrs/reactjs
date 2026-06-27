import { useState, useEffect } from 'react';



import Course from './Course';


function CourseList() {

    const [courses, setCourses] = useState(null)
    const [error, setError] = useState(null)


    function handleDelete(id){
        const new_courses = courses.filter((course) => id != course.id )
        setCourses(new_courses)
    }

    useEffect(() => {

        fetch("http://localhost:3001/courses")
        .then((response)=> {
            if(!response.ok){
                throw Error("this url end point is not valid")
            }
            console.log(response);
         return response.json()
        }).then(data => setCourses(data))
        .catch((error) => {
            setError(error.message)
        })
        
    },[])


    //courses.sort((x,y) => y.price - x.price )

    //const vfmCourses = courses.filter((cou) => cou.name != "Css full course")

    //courses.sort((x,y) => x.rating-y.rating)

    if(!courses){
        return(
            <>
            <p>{error}</p>
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