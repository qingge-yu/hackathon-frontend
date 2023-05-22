import './Carousel.css'
import { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LessonBrowser from '../LessonBrowser/LessonBrowser';
import LessonOne from '../LessonList/Lesson1';
import LessonTwo from '../LessonList/Lesson2';
import LessonThree from '../LessonList/Lesson3';
import LessonFour from '../LessonList/Lesson4';
import LessonFive from '../LessonList/Lesson5';
import LessonSix from '../LessonList/Lesson6';
import LessonSeven from '../LessonList/Lesson7';
import LessonEight from '../LessonList/Lesson8';
import LessonNine from '../LessonList/Lesson9';


const LessonCarousel = ({ user, modalShow, setModalShow }) => {

  const [lessonNum, setLessonNum] = useState(1)
  // const [lessonDisplay, setLessonDisplay] = useState(1)

  // const buttons = [1,2,3,4,5,6,7,8,9]
  function handleLessonClick(name) {
    setLessonNum(name)
    console.log(lessonNum)
  }

  // useEffect(() => { 
  //   if (lessonNum === 1) {
  //     setLessonDisplay(1)
  //   } else setLessonDisplay(2)
  // }, [lessonNum])

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
      {lessonNum === 1 ? (<LessonOne modalShow={modalShow} setModalShow={setModalShow}/>):<></>}
      {lessonNum === 2 ? (<LessonTwo modalShow={modalShow} setModalShow={setModalShow}/>):<></>}
      {lessonNum === 3 ? (<LessonThree modalShow={modalShow} setModalShow={setModalShow}/>):<></>}
      {lessonNum === 4 ? (<LessonFour modalShow={modalShow} setModalShow={setModalShow}/>):<></>}
      {lessonNum === 5 ? (<LessonFive modalShow={modalShow} setModalShow={setModalShow}/>):<></>}
      {lessonNum === 6 ? (<LessonSix modalShow={modalShow} setModalShow={setModalShow}/>):<></>}
      {lessonNum === 7 ? (<LessonSeven modalShow={modalShow} setModalShow={setModalShow}/>):<></>}
      {lessonNum === 8 ? (<LessonEight modalShow={modalShow} setModalShow={setModalShow}/>):<></>}
      {lessonNum === 9 ? (<LessonNine modalShow={modalShow} setModalShow={setModalShow}/>):<></>}
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
          <p id='carouselP' className={lessonNum === 1 ? 'activeP' : 'inactiveP'}>Browser Basics</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 2 ? 'active' : 'inactive'}
            value= {`Lesson 2`}
            onClick={() => handleLessonClick(2)} 
          />
          <p id='carouselP' className={lessonNum === 2 ? 'activeP' : 'inactiveP'}>Internet Privacy</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 3 ? 'active' : 'inactive'}
            value= {`Lesson 3`}
            onClick={() => handleLessonClick(3)} 
          />
          <p id='carouselP' className={lessonNum === 3 ? 'activeP' : 'inactiveP'}>Online Job Search</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 4 ? 'active' : 'inactive'}
            value= {`Lesson 4`}
            onClick={() => handleLessonClick(4)} 
          />
          <p id='carouselP' className={lessonNum === 4 ? 'activeP' : 'inactiveP'}>Accounts & Passwords</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 5 ? 'active' : 'inactive'}
            value= {`Lesson 5`}
            onClick={() => handleLessonClick(5)} 
          />
          <p id='carouselP' className={lessonNum === 5 ? 'activeP' : 'inactiveP'}>Introduction to Email</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 6 ? 'active' : 'inactive'}
            value= {`Lesson 6`}
            onClick={() => handleLessonClick(6)} 
          />
          <p id='carouselP' className={lessonNum === 6 ? 'activeP' : 'inactiveP'}>Connect With Others</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 7 ? 'active' : 'inactive'}
            value= {`Lesson 7`}
            onClick={() => handleLessonClick(7)} 
          />
          <p id='carouselP' className={lessonNum === 7 ? 'activeP' : 'inactiveP'}>Online Fraud & Scams</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 8 ? 'active' : 'inactive'}
            value= {`Lesson 8`}
            onClick={() => handleLessonClick(8)} 
          />
          <p id='carouselP' className={lessonNum === 8 ? 'activeP' : 'inactiveP'}>Files and Folders</p>
          </div>
          <div className='lessonContainer'>
          <input
            type='button'
            id='lessonButton'
            className={lessonNum === 9 ? 'active' : 'inactive'}
            value= {`Lesson 9`}
            onClick={() => handleLessonClick(9)} 
          />
          <p id='carouselP' className={lessonNum === 9 ? 'activeP' : 'inactiveP'}>Downloads</p>
          </div>
        </Carousel>
      </div>
    </>
   )
}
 
export default LessonCarousel;
