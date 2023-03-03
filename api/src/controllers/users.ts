 

 import { Request, Response } from "express";


const userList = [
    {
      id: 1,
      email: 'john.doe@example.com',
      password: 'Abc123!@#',
      firstname: 'John',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      email: 'jane.doe@example.com',
      password: 'Def456$%^',
      firstname: 'Jane',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      email: 'bob.smith@example.com',
      password: 'P@ssw0rd!',
      firstname: 'Bob',
      image: 'https://via.placeholder.com/150',
    },
  ];




export const createUser = async (req: Request, res: Response) => {

    try {
        const newUser = req.body;
        res.json(newUser);
    } catch (error) {
        console.log(error);
        
    }   
    };

export const logInUser = async (req: Request, res: Response) => {

    try {
        const newUser = req.body;
        res.json( {message: "user log in"});
    } catch (error) {
        console.log(error);
        
    }   
    };


export const getUser = async(req: Request, res: Response) => {
    // get user by id
    const userId = req.params.id;
    // const foundUser = userList.filter((user) => user.id !== Number(userId))
    const foundUser = userList.find((user) => user.id !== Number(userId));
    res.json(foundUser);
};


