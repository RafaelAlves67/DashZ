import './Section.css'
import { useContext, useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { Context } from "../context/Context"
import { Link } from "react-router-dom"
import useProduct from '../hooks/useProduct'
import { product } from '../types/types'
import Table from './Table/Table'
import ModalRegister from './ModalAddProduct/ModalRegister'


const Section = () => {

    // CONTEXT API
    const {authenticate} = useContext(Context)

    // PRODUTOS DO SISTEMA
    const [products, setProducts] = useState<product[]>([])

    // HOOK
    const {getProducts, addProduct} = useProduct()

    // MODAL DE CADASTRO DE PRODUTO
    const [modeEditRegister, setModeEditRegister] = useState(false)

    // ESTADOS DOS CAMPOS
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')
    const [msg, setMsg] = useState('')
    const [search, setSearch] = useState('')

    const Navigate = useNavigate()

    useEffect(() => {
        const getProduct = async () => {
            const data = await getProducts()
            setProducts(data)
        }

        getProduct();        
    }, [])

    // function para abrir janela de cadastro de produto
    const handleEditRegister = () => {
        setModeEditRegister(true)
    }

    const handleEditCancel = () => {
        setModeEditRegister(false)
        setMsg("")
    }

    const handleSubmit = async () => {
        setMsg(" ")
        const data = await addProduct(name,price,size)

        if(data.msg === 'Produto cadastrado!'){
            setMsg(data.msg)
            setProducts((prevProduct) => [...prevProduct, data.newProduct])
            setName('')
            setPrice('')
            setSize('')
            setTimeout(() => {
                setModeEditRegister(false)
                setMsg(" ")
            }, 1500)
            return
        } 

        setMsg(data.msg)
    }

    const handleSearch = () => {
        if(!search){
            return
        }

        Navigate(`/search?q=${search}`)
        setSearch("")
    }


  return (
    <section>
        {authenticate ? 
        <>
            <div>
                  <h1>Cadastrar novos produtos</h1>
                  <button className="btn btn-success" onClick={handleEditRegister}>Cadastrar</button>
              </div>

            {/* // INPUT DE PESQUISA */}
              <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Pesquise" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setSearch(e.target.value)} />
                  <span className="input-group-text" id="basic-addon1"><button type="button" className="btn btn-primary" onClick={handleSearch}>Buscar</button></span>
              </div>

                {/* TABELA DE PRODUTOS */}
              <div className="div-table table-responsive">
                  <Table products={products} setProducts={setProducts}/>
              </div>

              {/* MODAL DE CADASTRO DE PRODUTO */}
              {modeEditRegister && 
                    <ModalRegister setName={setName} setPrice={setPrice} setSize={setSize} handleEditCancel={handleEditCancel} handleSubmit={handleSubmit} msg={msg}/>
                  }
        </> :
        <>
            <div className='div-center'>
                <h1>Acesso negado!</h1>

                <Link to="/login">Faça login</Link>
                <Link to="/cadastro">Crie sua conta</Link>
            </div>
        </>
        
        }
              


          </section>
  )
}

export default Section