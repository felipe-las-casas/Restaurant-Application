
import * as express from 'express'; 
import cors from 'cors';
import { router } from "./routes.ts";
import type { Request, Response, NextFunction } from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express.default();
app.use(express.json());
app.use(cors());

app.use(router);

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..','tmp'))
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }

    return res.status(500).json({
        status:'error',
        message: 'Internal server error.'
    })

});

app.listen(3333, () => console.log("Servidor rodando..."))