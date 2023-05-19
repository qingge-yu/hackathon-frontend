import styles from './LandingPage.css'
import Popup from '../../components/Pop-up/modal'
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = ({ user }) => {

  const [modalShow, setModalShow] = useState(false);


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
        {/* <h1>hi {user ? user.name : 'friend'}</h1> */}
      </main>
    </body>
  )
}

export default Landing
