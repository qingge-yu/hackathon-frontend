import LessonBrowser from "../LessonBrowser/LessonBrowser";
import './Lesson.css'

const LessonOne = ({ user, modalShow, setModalShow }) => {
  return ( 
    <>
    <LessonBrowser />
    <div className="lessonContent">
      <h1>Browser Basics</h1>
      <p>Congratulations on starting your journey!</p>
      <p>Let’s begin with some of the simple terms you’ll need to know about being a citizen of the web!</p>
      <button id='lessonOneBtn'>Start Learning</button>
    </div>
    </>
   );
}
 
export default LessonOne;