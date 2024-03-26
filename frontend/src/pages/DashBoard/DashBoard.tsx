import useProduct from "../../hooks/useProduct"
import { Context } from "../../context/Context"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { product } from "../../types/types"
import "./DashBoard.css"

const DashBoard = () => {

    const {authenticate} = useContext(Context)
    const {getDashBoard, getProducts} = useProduct()
    const [qntdProducts, setQntdProducts] = useState()
    const [products, setProducts] = useState<product[]>([]);
    const [priceTotal, setPriceTotal] = useState()

    useEffect(() => {
        const getDados = async () => {
            const data = await getDashBoard()
            setQntdProducts(data.qntdProduts)
            setPriceTotal(data.sumPrice[0].totalPrice)
        }


        const getData = async () => {
            const productsData = await getProducts()
            setProducts(productsData)
        }
        getData()
        getDados();
    }, [])

  return (
    <div>
        {authenticate ? 
        <>
            <div className="div-dash">
                <div>
                    <h4>Produtos cadastrados no sistema</h4>
                    <p>{qntdProducts} produtos</p>
                </div>

                <div>
                    <h4>Valor Total em produtos</h4>
                    <p>R$ {priceTotal}</p>
                </div>
            </div>

                <div className="div-dash-sizes">
                    <h4>Tamanhos de produtos disponivéis</h4>

                    <ul>
                        {products && products.map((product) => (
                            <li key={product._id}>| {product.size} |</li>
                        ))}
                    </ul>
                </div>
            
        </> 
        : 
        <>
            <h1>Acesso negado!</h1>

            <Link to="/login">Faça login</Link>
            <Link to="/cadastro">Crie sua conta</Link>
        </>}
    </div>
  )
}

export default DashBoard