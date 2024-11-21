import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
    </BrowserRouter>
  )
}

export default App
