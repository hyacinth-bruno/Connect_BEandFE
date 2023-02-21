import { Request, Response } from "express";

// const userList = [
//     {
//         id: 1,
//         userName: 'user 1',
//         price: 10.99,
//         image: 'https://media1.popsugar-assets.com/files/thumbor/NIuD31FHtikei2mpyw6-NRqyMpA/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/05/18/868/n/1922564/7cdf4103a5c5a5f7_netimg0nTrWd/i/best-summer-dresses.png'
//       },
//       {
//         id: 2,
//         userName: 'user 2',
//         price: 19.99,
//         image: 'https://media1.popsugar-assets.com/files/thumbor/beICYRiNvICAMgWiO7IkZSJcDVM/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/07/02/899/n/1922564/83e6b0335d1bc000c8a204.70555331_/i/Best-Beach-Holiday-Clothes-Women.jpg'
//       },
//       {
//         id: 3,
//         userName: 'user 3',
//         price: 5.99,
//         image: 'https://www.instyle.com/thmb/CMCxHpdZd5h1ni8VX8gc1Gjr_QQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1223362691-2000-baff2b0cae07445d9f381cee7cc72faf.jpg'
//       }
// ];


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
        res.json({message: "user log in"});
    } catch (error) {
        console.log(error);
        
    }   
    };




    export const getUser = async (req: Request, res: Response) => {

        try {
            const userId = req.params.id;
            const foundUser = userList.filter((user) => user.id !== Number(userId));
            // const foundUser = userList.find((user) => user.id === Number(userId));
            res.json(foundUser);
        } catch (error) {
            console.log(error);
            
        }   
        };