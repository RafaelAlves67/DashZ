import { ReactNode, createContext } from "react"
import useUser from "../hooks/useUser";

const initialValue = {
    authenticate: false,
    logout: () => {},
    login: () => {},
    name: '',
    setName: () => {}
}

type authContext = {
    authenticate: boolean,
    logout: () => void;
    login: () => void;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

export const Context = createContext<authContext>(initialValue)

export const ContextProvider = ({children}: {children: ReactNode}) => {

    function logout() {
        setAuthenticate(false)
        localStorage.removeItem('token')
    }

    function login(){
        setAuthenticate(true)
    }
 
    const {authenticate, setAuthenticate, setName, name} = useUser();

    return (
        <Context.Provider value={{authenticate, logout, login, name, setName}}>
            {children}
        </Context.Provider>
    )
}