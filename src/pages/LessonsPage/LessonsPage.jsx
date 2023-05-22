import LessonCarousel from "../../components/LessonCarousel/Carousel";
import styles from './LessonsPage.css'
import LessonBrowser from "../../components/LessonBrowser/LessonBrowser";
// import Button from 'react-bootstrap/Button';
import Popup from '../../components/Pop-up/modal.jsx'

const LessonsPage = ({ user, modalShow, setModalShow }) => {


  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossOrigin="anonymous"
      />
      <main className={styles.container}>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button> */}
        <Popup
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <LessonCarousel modalShow={modalShow} setModalShow={setModalShow}/>
        {/* <LessonBrowser modalShow={modalShow} setModalShow={setModalShow}/> */}
      </main>
    </>
  )
}

export default LessonsPage