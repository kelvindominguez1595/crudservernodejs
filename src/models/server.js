import express from 'express'
import ConnectionDB from '../config/ConnectionDB.js';
import UserRouter from '../router/UserRouter.js';

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.connectDatabase();
        this.middleware();
        this.routers();
    }

    async connectDatabase() {
        await ConnectionDB();
    }

    middleware() {
        this.app.use(express.json());
    }

    routers() {
        this.app.use('/api/users', UserRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`SERVIDOR LISTO PUERTO: ${this.port}`);
        });
    }
}

export default Server;