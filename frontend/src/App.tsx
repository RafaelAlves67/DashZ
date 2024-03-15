import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Section from './components/Section'

// components

import Header from './components/Header'
import Home from './components/Home'
import Aside from './components/Aside'
import Perfil from './pages/Perfil'

function App() {
  

  return (
      <body>
          <Header />

          <main> 
          <Aside />
          <div>
          <h1>Bem-vindo Rafael!</h1>

          <p>Bem vindo ao nosso sistema de controle de estoque!</p>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/products" element={<Section />}/>
                  <Route path="/profile" element={<Perfil />}/>
                </Routes>     
              </BrowserRouter>
          </div>
              </main>
      </body>
  )
}

export default App
