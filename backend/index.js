import express from 'express'
import cors from 'cors'
import db from './data/db.js'
import Routes from './routes/Routes.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/', Routes)

try{
    app.listen(3000, () => {console.log("Servidor rodando na porta 3000!")})
}catch(error){
    console.log("Erro no servidor!")
}


