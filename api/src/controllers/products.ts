
import { Request, Response } from "express";

const productList = [
    {
        id: 1,
        productName: 'Product 1',
        price: 10.99,
        image: "Picture1.jpg"
    },
      {
        id: 2,
        productName: 'Product 2',
        price: 19.99,
        image: "Picture2.jpg"
     },
      {
        id: 3,
        productName: 'Product 3',
        price: 5.99,
        image: "Picture3.jpg"
    }
];

export const getProducts = async (req: Request, res: Response) => {
try {
res.json(productList);
} catch (error) {
console.log(error);
}
};



