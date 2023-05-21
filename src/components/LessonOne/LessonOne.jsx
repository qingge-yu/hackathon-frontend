import { LessonOneData } from "./LessonOneData";
import './LessonOne.css'

const LessonOneSlides = () => {
  return ( 
    <div className="lessonOneContainer">
    {LessonOneData[0].image}
    </div>
   );
}
 
export default LessonOneSlides;