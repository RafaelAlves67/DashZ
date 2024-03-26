import { useState, useEffect } from "react"

export default function useUser (){

    const [authenticate, setAuthenticate] = useState(false)
    const [name, setName] = useState('')

    // useEffect 
    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            try{
                fetch('http://localhost:3000', { 
                    headers: {
                        "Content-Type" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    }
                })                 
                    setAuthenticate(true) 
            }catch(error){
                console.log("Erro ao verificar token: => " + error )
            }
        }else{
            console.log("Acesso negado!")
        }
    }, [])

    async function authLogin(email: string, password: string){

        try{
            const res = await fetch('http://localhost:3000/login', {
                method: "POST",
                headers: {
                    "Content-Type" : "Application/json"
                },
                body: JSON.stringify({email,password})
            })

            const data = await res.json()
            
            if(res.ok){
                await authUser(data.token)
            }

            return data
        }catch(error){
            console.log("Aconteceu um erro interno com servidor => " + error)
        }
    }

    async function register(name: string, email: string, password: string, confirmPassword: string, phone: string){

        try{
            const res = await fetch('http://localhost:3000/create', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, email, password, confirmPassword, phone})
            })

            const Data = await res.json()
            return Data.msg
        }catch(error){
            console.log("Aconteceu um erro interno com servidor => " + error)
        }
    }

    async function authUser(token: string){
            setAuthenticate(true)
            localStorage.setItem('token', token)
    }

    return {authLogin, authenticate, setAuthenticate, register, setName, name}
}

