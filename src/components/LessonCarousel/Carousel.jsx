import './Carousel.css'
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LessonBrowser from '../LessonBrowser/LessonBrowser';
import LessonOneSlides from '../LessonOne/LessonOne';


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
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 1 ? 'active' : 'inactive'}
            value= {`Lesson 1`}
            onClick={() => handleLessonClick(1)} 
          />
          <p id='carouselP' className={lessonNum === 1 ? 'activeP' : 'inactiveP'}>Intro to Browser</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 2 ? 'active' : 'inactive'}
            value= {`Lesson 2`}
            onClick={() => handleLessonClick(2)} 
          />
          <p id='carouselP' className={lessonNum === 2 ? 'activeP' : 'inactiveP'}>Intro to email</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 3 ? 'active' : 'inactive'}
            value= {`Lesson 3`}
            onClick={() => handleLessonClick(3)} 
          />
          <p id='carouselP' className={lessonNum === 3 ? 'activeP' : 'inactiveP'}>Accounts & Passwords</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 4 ? 'active' : 'inactive'}
            value= {`Lesson 4`}
            onClick={() => handleLessonClick(4)} 
          />
          <p id='carouselP' className={lessonNum === 4 ? 'activeP' : 'inactiveP'}>Online Fraud & Scams</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 5 ? 'active' : 'inactive'}
            value= {`Lesson 5`}
            onClick={() => handleLessonClick(5)} 
          />
          <p id='carouselP' className={lessonNum === 5 ? 'activeP' : 'inactiveP'}>Internet Privacy</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 6 ? 'active' : 'inactive'}
            value= {`Lesson 6`}
            onClick={() => handleLessonClick(6)} 
          />
          <p id='carouselP' className={lessonNum === 6 ? 'activeP' : 'inactiveP'}>Online Job Search</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 7 ? 'active' : 'inactive'}
            value= {`Lesson 7`}
            onClick={() => handleLessonClick(7)} 
          />
          <p id='carouselP' className={lessonNum === 7 ? 'activeP' : 'inactiveP'}>Internet History</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 8 ? 'active' : 'inactive'}
            value= {`Lesson 8`}
            onClick={() => handleLessonClick(8)} 
          />
          <p id='carouselP' className={lessonNum === 8 ? 'activeP' : 'inactiveP'}>Computer Components</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 9 ? 'active' : 'inactive'}
            value= {`Lesson 9`}
            onClick={() => handleLessonClick(9)} 
          />
          <p id='carouselP' className={lessonNum === 9 ? 'activeP' : 'inactiveP'}>Typing Tutorial</p>
          </div>

          {/* {buttons.map(function(name) {
            return <input
                      type='button'
                      id='lessonButton'
                      className={lessonNum === name ? 'active' : 'inactive'}
                      value= {`Lesson ${name}`}
                      onClick={() => handleLessonClick(name)}
                      key={ name } />
          })} */}
        </Carousel>
      </div>
      {lessonOne ? (<LessonBrowser />):<></>}
      {/* {lessonOne ? (<LessonOneSlides />):<></>} */}
    </>
   )
}
 
export default LessonCarousel;
