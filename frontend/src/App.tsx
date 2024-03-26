import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Section from './components/Section'

// components
import Header from './components/Header'
import Home from './components/Home'
import Aside from './components/Aside'
import Perfil from './pages/Perfil/Perfil'

// pages
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Search from './pages/Search/Search'
import ViewProduct from './pages/ViewProduct/ViewProduct'
import Settings from './pages/Settingss/Settings'
import DashBoard from './pages/DashBoard/DashBoard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Aside />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Section />} />
              <Route path="/profile" element={<Perfil />} />
              <Route path="/dash" element={<DashBoard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="search" element={<Search />} />
              <Route path="product" element={<ViewProduct />} />
              <Route path="/settings" element={<Settings />} />
              
              
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
