import React from 'react'
import "./ModalRegister.css"

type Props = {
    setPrice: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setSize: React.Dispatch<React.SetStateAction<string>>,
    handleEditCancel: () => void,
    handleSubmit: () => void,
    msg: string
}

const ModalRegister = ({setName, setPrice, setSize, handleEditCancel, handleSubmit, msg}: Props) => {
  return (
      <div>
          <div className='modal-register'>

              <h1>Novo produto</h1>
              <strong>Preencha os campos abaixos</strong>
              <form>

                  <label>Nome</label>
                  <input type="text" placeholder='Insira o nome do produto' onChange={(e) => setName(e.target.value)} />

                  <label>Preço</label>
                  <input type="number" placeholder='Insira o preço' onChange={(e) => setPrice(e.target.value)} />

                  <label>Tamanho</label>
                  <select name="" id="" onChange={(e) => setSize(e.target.value)}>
                      <option value="">Escolha o tamanho</option>
                      <option value="41/42">41/42</option>
                      <option value="39/40">39/40</option>
                      <option value="43/44">43/44</option>
                      <option value="37/38">37/38</option>
                      <option value="35/36">35/36</option>
                  </select>
              </form>

              <div className='div-btn-register'>
                  <button className='btn btn-success' onClick={handleSubmit}>Cadastrar</button>
                  <button className="btn btn-danger" onClick={handleEditCancel}>Cancelar</button>
              </div>

  
              {msg === 'Produto cadastrado!' && <p className='p-sucess'>{msg}</p>}
              {msg !== 'Produto cadastrado!' && msg.length > 0 && <p className="p-error">{msg}</p>} 
          </div>
      </div>
  )
}

export default ModalRegister