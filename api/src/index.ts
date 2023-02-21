//import { ReactDOM } from 'react-dom/client';
// create a server here
// create a server here

import Express from "express";
import productRouter from "../src/routes/products";
import cors from "cors";
import userRouter from "../src/routes/users";



import path from "path";


const app = Express();
app.use (Express.json());
app.use(cors());
app.use(Express.static(path.join(__dirname, 'images')));


//routes
app.use("/products", productRouter);
app.use('/users', userRouter);


const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


/**
 * We need to import and use the CORS middleware in our server when we want to allow cross-origin resource sharing. 
 * Cross-origin requests happen when a client requests a resource that comes from a different domain 
 * or port than the one that served the original web page. 
 * By default, web browsers do not allow such requests, as they can pose security risks, such as CSRF attacks.
 * 
 * 
 * 
 * 
 * The CORS middleware enables us to specify which domains and ports are allowed to make 
 * cross-origin requests to our server, and what type of requests are allowed 
 * (such as GET, POST, or OPTIONS). By configuring CORS, 
 * we can enable cross-origin requests while minimizing the security risks.
 * 
 */
