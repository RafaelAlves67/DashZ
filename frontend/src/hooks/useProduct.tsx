import { product } from "../types/types"

const api = 'http://localhost:3000'


export default function useProduct(){

    const token = localStorage.getItem('token')


    async function getProducts(){

        const res = await fetch(`${api}/products/all`,
            {
                headers: {"content-type" : "application/json", "Authorization" : `Bearer ${token}`}
            }
        )

        const data = await res.json() 

        if(res.ok){
            return data
        }

    }

    async function addProduct(name:string, price: string | number, size:string){
        const res = await fetch(`${api}/product/create`, {
            method: "POST", 
            headers: {"content-type" : "application/json", "Authorization" : `Bearer ${token}`},
            body: JSON.stringify({name,price,size})
        })

        const data = await res.json()

        return data

    }

    async function searchProduct(search: string | null){
        const res = await fetch(`${api}/product/${search}`, {
            headers: {"content-type" : "application/json", "Authorization" : `Bearer ${token}`},
        })

        const data = await res.json()

        return data
    }

    async function deleteProduct(_id: string){
       await fetch(`${api}/product/delete/${_id}`, {
            method: "DELETE",
            headers: {"content-type" : "application/json", "Authorization" : `Bearer ${token}`},
        })
    }

    async function editProduct(dataProduct: product){
        const res = await fetch(`${api}/product/edit/${dataProduct._id}`, {
            method: "PUT",
            headers: {"content-type" : "application/json", "Authorization" : `Bearer ${token}`},
            body: JSON.stringify(dataProduct)
        })

        const data = await res.json()
        return data
    }

    async function getProductById(_id: string | null){
        
        const res = await fetch(`${api}/product/get/${_id}`,
            {
                headers: {"content-type" : "application/json", "Authorization" : `Bearer ${token}`}
            }
        )

        const data = await res.json() 

        return data
    }

    async function getDashBoard(){
        const res = await fetch(`${api}/products/count`,
        {
            headers: {"content-type" : "application/json", "Authorization" : `Bearer ${token}`}
        }
    )

    const data = await res.json() 

    return data
    }

    return {getProducts, addProduct, searchProduct, deleteProduct, editProduct, getProductById, getDashBoard}
}