import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import "./Perfil.css";
import { FaEdit } from "react-icons/fa";


type User = {
    _id: string;
    name: string;
    email: string;
    password: string | undefined;
    phone: string;
};

const Perfil = () => {
    const { authenticate, setName } = useContext(Context);
    const [user, setUser] = useState<User | null>(null);
    const [token] = useState(localStorage.getItem('token') || '');
    const [editMode, setEditMode] = useState(false);
    const [editedUser, setEditedUser] = useState<User | null>(null);
    const [msg, setMsg] = useState('');



    useEffect(() => {
        if (token) {
            fetch('https://backend-sxzc.onrender.com/getUser', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((res) => res.json())
            .then((data) => setUser(data));
        }
    }, [token]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (editedUser) {
            setEditedUser(prevState => ({ ...prevState!, [name]: value}));
        }
    };

    const handleEdit = () => {
        setEditMode(true);
        setEditedUser(user); // Setando o usuário atual para ser editado
    };

    const handleCancel = () => {
        setEditMode(false);
        setEditedUser(null); // Limpando o usuário editado ao cancelar
        setMsg('')
    };

    const handleSave = async () => {
        setMsg('')
        if (!editedUser) return;

        const { _id, name: newName, email: newEmail, phone: newPhone } = editedUser;
        const data = { name: newName, email: newEmail, phone: newPhone };

        
        const res = await fetch(`http://localhost:3000/edit/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        const newData =  await res.json()
        console.log(newData)

        if(res.ok){

            // muda o contexto do nome
            if(newName){
                setName(newName)
            }

            setUser(editedUser); // Atualizando o usuário exibido após a edição
            setEditMode(false);
            setEditedUser(null); // Limpando o usuário editado após salvar
        }else{
            return setMsg(newData.msg)
        }
    };

    return (
        <div>
            {authenticate ? (
                <div className="div-profile">
                    <h3>Perfil: </h3>

                    <div className="div-input-profile">
                        <label>Nome:</label>
                        {editMode ? (
                            <input type="text" name="name" value={editedUser?.name} onChange={handleChange} />
                        ) : (
                            <input type="text" value={user?.name} readOnly />
                        )}

                        <label>Email: </label>
                        {editMode ? (
                            <input type="email" name="email" value={editedUser?.email || ''} onChange={handleChange} />
                        ) : (
                            <input type="email" value={user?.email || ''} readOnly />
                        )}

                        <label>Telefone: </label>
                        {editMode ? (
                            <input type="number" name="phone" value={editedUser?.phone || ''} onChange={handleChange} />
                        ) : (
                            <input type="phone" value={user?.phone || ''} readOnly />
                        )}
                    </div>

                    <div className="div-button-profile">
                        {editMode ? (
                            <div className="div-edit-cancel">
                                <button className="btn btn-success" onClick={handleSave}>Salvar</button>
                                <button className="btn btn-danger" onClick={handleCancel}>Cancelar</button>
                            </div>
                        ) : (
                            <button className="btn btn-warning" onClick={handleEdit}><FaEdit /> Editar</button>
                        )}
                    </div>
                    {msg && <p>{msg}</p>}
                </div>
            ) : (
                <>
                    <h1>Acesso negado!</h1>

                    <Link to="/login">Faça login</Link>
                    <Link to="/cadastro">Crie sua conta</Link>
                </>
            )}
        </div>
    );
};

export default Perfil;
