// npm modules
import { useState, useMemo, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/SignupPage/SignupPage'
import Login from './pages/LoginPage/LoginPage'
import Landing from './pages/LandingPage/LandingPage'
import Profiles from './pages/ProfilePage/ProfilePage'
import Contact from './pages/ContactPage/ContactPage'
import About from './pages/AboutPage/AboutPage'
import ChangePassword from './pages/ChangePasswordPage/ChangePasswordPage'
import LessonsPage from './pages/LessonsPage/LessonsPage'
import Glossary from './pages/GlossaryPage/Glossary'

// components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [modalShow, setModalShow] = useState(false);
  const [Data, setData] = useState();
  const [language, setLanguage] = useState('en');

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const URL = "https://navigatedu-api.herokuapp.com/"
  // const URL = "http://localhost:4000/"

  const getData = async () => {
    const response = await fetch(URL+language);
    const data = await response.json();
    setData(data);
};


  let trigger = useMemo(() => ({language}), [language]);
  useEffect(()=> {getData()}, [trigger])

  function AppRender() {
    return (
    <>
      <NavBar user={user} language={language} data={Data} setLanguage={setLanguage} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} modalShow={modalShow} setModalShow={setModalShow} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/learn"
          element={
            <LessonsPage modalShow={modalShow} setModalShow={setModalShow} />
          }
        />
        <Route
          path="/glossary"
          element={
            <Glossary />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact />
          }
        />
        <Route
          path="/about"
          element={
            <About />
          }
        />
        <Route
          path="/"
          element={
            <Landing />
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  )
  }
  return Data ? AppRender() : console.log("loading")
  // return AppRender()
}

export default App
