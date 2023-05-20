import LessonCarousel from "../../components/LessonCarousel/Carousel";
import styles from './LessonsPage.css'
import Popup from '../../components/Pop-up/Modal'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonBrowser from "../../components/LessonBrowser/LessonBrowser";

const LessonsPage = ({ user, modalShow, setModalShow }) => {


  return (
    <body>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <main className={styles.container}>
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <Popup
          show={modalShow}
          onHide={() => setModalShow(false)}
        /> */}
        <LessonCarousel />
        <LessonBrowser modalShow={modalShow} setModalShow={setModalShow}/>
      </main>
    </body>
  )
}

export default LessonsPage