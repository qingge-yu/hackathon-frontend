import styles from './LandingPage.css'
import Popup from '../../components/Pop-up/modal'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonCarousel from '../../components/LessonCarousel/Carousel';

const Landing = ({ user, modalShow, setModalShow }) => {


  return (
    <body>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <main className={styles.container}>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
        <Popup
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </main>
        <LessonCarousel />
    </body>
  )
}

export default Landing
