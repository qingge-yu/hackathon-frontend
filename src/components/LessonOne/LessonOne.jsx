import { LessonOneData } from "./LessonOneData";
import './LessonOne.css'

const LessonOne = () => {
  return ( 
    <div className="lessonOneContainer">
    {LessonOneData[0].image}
    </div>
   );
}
 
export default LessonOne;