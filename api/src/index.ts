import express, { Request, Response } from "express";
import cors from "cors";
import {listings} from "./listings.repository";
const PORT = 3005;

const app = express();
app.use(cors());

app.get("/listings", (request: Request, response: Response) => { 
  response.status(200).json(listings);
}); 

app.listen(PORT, () => { 
  console.log(`Server listening at http://localhost:${PORT}`); 
})
