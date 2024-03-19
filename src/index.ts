import express, {Express,Request, Response} from "express";


const app:Express = express();
app.use(express.json());

app.get('/',(req:Request, res:Response) => {
    res.send('/ Route is Working');
});

app.listen(3000,()=>{
    console.log("app is Working");
});