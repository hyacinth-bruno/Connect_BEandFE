import React, {useState} from "react";

import { TextField, Button } from "@mui/material";

import axios from "axios";

type User = {
  name: string;
  email: string;
  age: number;
}

export default function UserForm() {

const [userInput, setUserInput] = useState <User>({
  name: "",
  email: "",
  age: 0,
});

function getUserName(event: React.ChangeEvent<HTMLInputElement>) {
  // username: event.target.value
setUserInput({...userInput, name: event.target.value});
}

function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
  setUserInput({ ...userInput, email: event.target.value });
}

function getUserAge(event: React.ChangeEvent<HTMLInputElement>) {
  // username: event.target.value
setUserInput({...userInput, age: Number(event.target.value)});
}

console.log(userInput, "userInput");


const url = "http://localhost:8000/users";
function onSubmitHandler () {
  axios.post(url, userInput)
  .then((response) => console.log(response))
      .catch((error) => console.error(error));

}

  return (
  <div>
    UserForm
    <TextField id = "outlined-basic" label = "Name" variant = "outlined" onChange={getUserName}/>

    <TextField id = "outlined-basic" label = "Email" variant = "outlined" onChange={getUserEmail}/>
    <TextField id = "outlined-basic" label = "Age" variant = "outlined" onChange={getUserAge}/>

    {/* <button onClick={onSubmitHandler}></button> */}
    
    <Button variant="contained" onClick={onSubmitHandler}>Submit</Button>
    </div>
  );
}
