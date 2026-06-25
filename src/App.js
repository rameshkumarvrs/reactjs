import './App.css';
import html from './assets/174854.png'
import css from './assets/css.png'
import js from './assets/js.png'


import Course from './Course';


function App() {
  return (
    <>
    
    
     <Course 
     img = {html}
     name = "Html" 
     description="This is Html course"
     />
      <Course
      img = {css} 
      name = "Css"
      description="This is Css course"
      show = {true}
      />
       <Course
       img = {js} 
       name = "Javascript"
        description="This is JSS course"
        show = {true}
        />
        
     
    </>
    
  );
}

export default App;
