import './Carousel.css'
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LessonBrowser from '../LessonBrowser/LessonBrowser';


const LessonCarousel = () => {

  const [lessonNum, setLessonNum] = useState(1)
  const [lessonOne, setLessonOne] = useState(true)

  const buttons = [1,2,3,4,5,6,7,8,9]
  function handleLessonClick(name) {
    setLessonNum(name)
    console.log(lessonNum)
  }

  useEffect(() => { 
    if (lessonNum === 1) {
      setLessonOne(true)
    } else setLessonOne(false)
  }, [lessonNum])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1500, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  return ( 
    <>
      <div className='carouselContainer'>
        <Carousel className='carousel' responsive={responsive}>
          {buttons.map(function(name) {
            return <input
                      type='button'
                      id='lessonButton'
                      className={lessonNum === name ? 'active' : 'inactive'}
                      value= {`Lesson ${name}`}
                      onClick={() => handleLessonClick(name)}
                      key={ name } />
          })}
        </Carousel>
      </div>
      {lessonOne ? (<LessonBrowser />):<></>}
    </>
   )
}
 
export default LessonCarousel;
