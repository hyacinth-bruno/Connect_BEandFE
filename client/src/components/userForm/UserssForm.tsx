import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserssForm.css";


type User = {
  // name: string;
  email: string;
  // age: number;
  password: string;
};

const validationSchema = yup.object({
  // name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  // age: yup.number().required("Age is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(2, "It should be a string and have two more letters !!")
    .max(50, "Too Long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
    ),
});

export default function UsersForm() {
  const navigate = useNavigate();

  const handleSubmit = async (values: User) => {
    try {
      await axios.post("http://localhost:8000/users/login", values);
      navigate("/user");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{
        // name: "",
        email: "",
        // age: 0,
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, errors, touched }) => (
        <Form>
          {/* <div>
            User log in with email and password < br />< br />< hr />
            <Field
              as={TextField}
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              required
              onChange={handleChange}
              helperText={touched.name && errors.name}
              error={touched.name && Boolean(errors.name)}
            />
          </div> */}
          <div>
            <Field
              as={TextField}
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              required
              onChange={handleChange}
              helperText={touched.email && errors.email}
              error={touched.email && Boolean(errors.email)}
            />
          </div>
          {/* <div>
            <Field
              as={TextField}
              id="age"
              name="age"
              label="Age"
              variant="outlined"
              type="number"
              required
              onChange={handleChange}
              helperText={touched.age && errors.age}
              error={touched.age && Boolean(errors.age)}
            />
          </div> */}
          <div>

            <div>
            <Field
              as={TextField}
              // password = P@ssw0rd!
                id="password"  
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                required
                onChange={handleChange}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
              />
            </div>


            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
