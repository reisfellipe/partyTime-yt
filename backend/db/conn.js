const mongoose = require("mongoose");

async function main(){

    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            "mongodb+srv://justfellipe:RTJznutHsIW1dxq9@cluster0.bk5ee3g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("Connected to database")
    } catch(error){
        console.log(`Erro: ${error}`);
    }

}

module.exports = main;