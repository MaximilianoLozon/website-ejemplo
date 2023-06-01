import { useState } from 'react'
import Header from './componentes/Header/Header.jsx'
import Portfolio from './componentes/Portfolio/Portfolio.jsx'
import Footer from './componentes/Footer/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App
