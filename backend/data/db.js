import mongoose from "mongoose";

async function main(){
    const db = mongoose.connect('mongodb://localhost:27017/advocacia')
    console.log('Conectou ao banco de dados MongoDB')
}

try{
    main();
}catch(error){
    console.log("Erro interno de servidor: ==>" + error)
}

export default mongoose