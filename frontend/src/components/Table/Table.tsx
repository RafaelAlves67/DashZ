import { product } from '../../types/types'
import useProduct from '../../hooks/useProduct'
import { useState } from 'react'
import "./table.css"
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


type Props = {
    products: product[],
    setProducts: React.Dispatch<React.SetStateAction<product[]>>,
}

  // HOOKS
  const {deleteProduct, editProduct} = useProduct()

  // NAVIGATE


const Table = ({products, setProducts}: Props) => {

  const Navigate = useNavigate()

    const [modeEdit, setModeEdit] = useState(false)
    const [msg, setMsg] = useState('')
    const [editedProduct, setEditedProduct] = useState<product | null>(null)

    // DELETE
    const handleDeleteBtn = async (_id:string) => {
      await deleteProduct(_id)
      setProducts((prevProducts) => prevProducts.filter((product) => {return product._id !== _id}))
  }

  // PUT
  const handleEdit = async (_id: string) => {
      setModeEdit(true)
      const product =  products.filter((p) => {return p._id === _id})
      setEditedProduct(product[0])
  }

  const handleCancel = () => {
    setModeEdit(false);
    setEditedProduct(null); // Limpando o produto editado ao cancelar
    setMsg('')
  }

  const handleSave = async () => {
    setMsg('')
    if (!editedProduct) return;

    const { _id, createdAt, name: newName, price: newPrice, size: newSize } = editedProduct;
    const data = { name: newName, price: newPrice, size: newSize, _id, createdAt };
    const dataProduct = await editProduct(data)

    if(dataProduct.msg === 'Produto alterado!'){
        setProducts((prevProduct) => prevProduct.filter((p) => {return p._id !== _id}))
        setProducts((prevProduct) => [...prevProduct, data])
        setMsg(dataProduct.msg)
        setEditedProduct(null)
        setTimeout(() => {
          setModeEdit(false)
        }, 1500)
        return
    }
    setMsg(dataProduct.msg)
  }

  // PEGANDO VALOR DO INPUT
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (editedProduct) {
        setEditedProduct(prevState => ({ ...prevState!, [name]: value}));
    }
};

const productsOrder = products.sort((a, b) => {
  const nameA = a.name.toUpperCase(); 
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
      return -1; 
  }
  if (nameA > nameB) {
      return 1; 
  }
  return 0; 
});

// VISUALIZAR
const handleview = (_id: string) => {
    Navigate(`/product?q=${_id}`)
}


  return (
    <table className="table table-hover">
    <thead className="">
        <tr className="text-center">
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Tamanho</th>
            <th scope="col">Ações</th>
        </tr>
    </thead>

    <tbody>
        {productsOrder && productsOrder.map((product) => (
          <tr className='text-center' key={product._id}>
              <th scope="row">{product!.name}</th>
              <td>R$ {product.price}</td>
              <td>{product.size}</td>
              <td>
                <button type="button" className="btn btn-success" onClick={() => handleview(product._id)}>Visualizar</button>
                <button type="button" className="btn btn-warning" onClick={() => handleEdit(product._id)}>Editar</button>
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteBtn(product._id)}>Apagar</button>
              </td>
          </tr>
        ))}
    </tbody>

    {modeEdit && <div>
          <div className='modal-register'>

              <h1>Editar produto</h1>
              <strong>Preencha os campos abaixos que deseja editar</strong>
              <form className='form-edit'>

                  <label>Nome</label>
                  <input type="text" name="name" placeholder='Insira o nome do produto' value={editedProduct?.name || ''} onChange={handleChange}/>

                  <label>Preço</label>
                  <input type="number" name="price" placeholder='Insira o preço' value={editedProduct?.price || ''} onChange={handleChange}/>

                  <label>Tamanho</label>
                  <select name="size" id="" value={editedProduct?.size || ''} onChange={() => handleChange}>
                      <option value="">Escolha o tamanho</option>
                      <option value="41/42">41/42</option>
                      <option value="39/40">39/40</option>
                      <option value="43/44">43/44</option>
                      <option value="37/38">37/38</option>
                      <option value="35/36">35/36</option>
                  </select>
              </form>

              <div className='div-btn-edit'>
                  <button className='btn btn-warning' onClick={handleSave}><FaEdit /> Editar</button>
                  <button className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
              </div>

  
              {msg === 'Produto alterado!' && <p className='p-sucess'>{msg}</p>}
              {msg !== 'Produto alterado!' && msg.length > 0 && <p className="p-error">{msg}</p>} 
          </div>
      </div>}

</table>
  )
}

export default Table