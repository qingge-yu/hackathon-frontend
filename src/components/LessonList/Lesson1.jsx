import { useState } from "react";
import LessonBrowser from "../LessonBrowser/LessonBrowser";
import './Lesson.css'
import LessonOneBrowser from "../LessonBrowser/LessonOneBrowser";

const LessonOne = ({ user, modalShow, setModalShow }) => {
  const [lessonOneStart, setLessonOneStart] = useState(false)

  function handleClick() {
    setLessonOneStart(true)
    console.log(lessonOneStart)
  }

  return ( 
    <>
    {/* <LessonBrowser /> */}
    {/* <div className="lessonContent"> */}
      {lessonOneStart ? <><LessonOneBrowser/></> : <><LessonBrowser />
    <div className="lessonContent"><h1>Browser Basics</h1>
      <p>Congratulations on starting your journey!</p>
      <p>Let’s begin with some of the simple terms you’ll need to know about being a citizen of the web!</p>
      <button id='lessonOneBtn' onClick={handleClick}>Start Learning</button></div></>}
    {/* </div> */}
    </>
   );
}
 
export default LessonOne;