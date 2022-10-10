import mongoose from 'mongoose';

const ConnectionDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOATHLAS);
        console.log("ME CONECTE A LA BASE DE DATOS DE MONGO ATHLAS");
    } catch (error) {
        console.log("Ocurrio un error con la connexion" + error);
        throw new Error(error);
    }
}

export default ConnectionDB;