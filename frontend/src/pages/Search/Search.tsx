
import { useContext , useEffect, useState} from "react"
import { Context } from "../../context/Context"
import { useSearchParams, Link } from "react-router-dom"
import { product } from "../../types/types"
import useProduct from "../../hooks/useProduct"
import "./Search.css"
import { IoReturnDownBackSharp } from "react-icons/io5";
import Table from "../../components/Table/Table"

const Search = () => {

    const {authenticate} = useContext(Context)
    const [search] = useSearchParams()
    const [products, setProducts] = useState<product[]>([])
    const [msg, setMsg] = useState('')
    const name = search.get("q")

    // import hook
    const {searchProduct} = useProduct()

    useEffect(() => {
        const searchData = async () => {
            const data = await searchProduct(name)

            if(data.msg === 'Produto não encontrado!'){
                setMsg(data.msg)
            }

            setProducts(data)
        } 

        searchData()
        console.log(products)

    }, [name])

  return (
        <div className="div-search">
            {authenticate ? 
                

                <div className="div-table table-responsive">
                    <h1>Produtos encontrados de: {name}</h1>
                    <Table products={products} setProducts={setProducts}/>

                    {msg && <h1>{msg}</h1>}

                    <div className="div-btn-back"><button className="btn btn-primary"><Link to="/products"><IoReturnDownBackSharp /> Voltar</Link></button></div>

                    </div>    
            : 
                <>
                    <h1>Acesso negado!</h1>

                    <Link to="/login">Faça login</Link>
                    <Link to="/cadastro">Crie sua conta</Link>
                </>
            }
        </div>
  )
}

export default Search