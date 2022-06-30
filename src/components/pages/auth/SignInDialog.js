import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useLoginUserMutation } from "../../../features/api/apiSlice";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function SignInDialog({ open, setOpen }) {
  const [loginUser, { isSuccess, isLoading, data, error }] =
    useLoginUserMutation();

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        await loginUser({
          username: "johndll;;",
          password: "m38rmF$",
        }).unwrap();

        if (isSuccess) {
          console.log("Success");
        }

        if (isLoading) {
          console.log("Loading");
        }
        if (data) {
          console.log(data);
        }
        if (error) {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Sign In</DialogTitle>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            variant="standard"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            variant="standard"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="primary" variant="contained" type="submit">
            Sign in
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default SignInDialog;
