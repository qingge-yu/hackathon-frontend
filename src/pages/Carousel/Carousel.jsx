import './Carousel.css'
import { useState} from "react";

const Carousel = () => {
  const [lessonPage, setLessonPage] = useState(1)

  function handleCountMinus() {
    if (lessonPage > 1) {
      setLessonPage(lessonPage - 1)
    } else {
      setLessonPage(9)
    }
  }

  function handleCountPlus() {
    if (lessonPage < 9) {
      setLessonPage(lessonPage + 1)
    } else {
      setLessonPage(1)
    }
  }


  return ( 
    <div className='lessonCarouselBtn'>
        <button onClick={handleCountMinus}> Lesson {lessonPage === 1 ? 9 :(lessonPage - 1)} </button>
        <p> Lesson {lessonPage}</p>
        <button onClick={handleCountPlus}> Lesson {lessonPage === 9 ? 1 : lessonPage + 1} </button>
    </div>
   );
}
 
export default Carousel;