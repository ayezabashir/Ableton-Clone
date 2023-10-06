import './App.scss'
import Cookies from './components/cookies/Cookies'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Menubar from './components/menubar/Menubar'

function App() {

  return (
    <>
      <Header />
      <Menubar />
      <Cookies />
      <Footer />
    </>
  )
}

export default App
