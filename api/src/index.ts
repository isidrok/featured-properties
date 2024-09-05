import express, { Request, Response } from "express";
import cors from "cors";
const PORT = 3005;

const app = express();
app.use(cors());

app.get("/", (request: Request, response: Response) => { 
  response.status(200).send("Hello World");
}); 

app.listen(PORT, () => { 
  console.log(`Server listening at http://localhost:${PORT}`); 
})
