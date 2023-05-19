import { useState } from "react";

const Carousel = () => {
  const [lessonPage, setLessonPage] = useState()

  function handleCount() {
    
  }
  return ( 
    <>
      <div>
        <button>Lesson 8</button>
        <button>Lesson 9</button>
        <button onClick={handleCount}>Lesson 1</button>
        <button>Lesson 2</button>
        <button>Lesson 3</button>
      </div>
    </>
   );
}
 
export default Carousel;