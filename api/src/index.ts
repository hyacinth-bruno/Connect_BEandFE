
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


const port = 8010;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

