import express, {Express,Request, Response} from "express";
import { PORT } from "./secrets";


const app:Express = express();
app.use(express.json());

app.get('/',(req:Request, res:Response) => {
    res.send('/ Route is Working');
});

app.listen(PORT,()=>{
    console.log("app is Working");
});