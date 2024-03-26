import { useSearchParams, Link } from "react-router-dom"
import { useContext , useEffect, useState} from "react"
import { Context } from "../../context/Context"
import { product } from "../../types/types"
import useProduct from "../../hooks/useProduct"
import "./ViewProduct.css"
import { IoReturnDownBackSharp } from "react-icons/io5";


const ViewProduct = () => {

    const {authenticate} = useContext(Context)
    const [query] = useSearchParams()
    const id = query.get("q")
    
    const [product, setProduct] = useState<product>()
    const {getProductById} = useProduct()

    const date = product?.createdAt.split("T")[0]


    useEffect(() => {
        const getData = async () => {
            const data = await getProductById(id)
            setProduct(data)
        }  
        getData();
    }, [id])

  return (
    <div>
        {authenticate ? 
        
        <div className="div-product">
            
                <h1>Veja o produto completo</h1>

                <h2 className="title-view">{product?.name}</h2>

                <p><strong>Preço</strong>: R${product?.price}</p>

                <p><strong>Tamanho</strong>: {product?.size}</p>

                
                <p><strong>Data da criação do produto: </strong> {date}</p>
            


                <div className="div-btn-back-view"><button className="btn btn-primary"><Link to="/products"><IoReturnDownBackSharp /> Voltar</Link></button></div>
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

export default ViewProduct