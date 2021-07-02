import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiClient from "../services/apiClient";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./Register.css";
import Navbar from "../navbar/Navbar";

export default function Register({ user, setUser }) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (user?.email) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    if (event.target.name === "passwordConfirm") {
      if (event.target.value !== form.password) {
        setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsProcessing(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }

    const { data, error } = await apiClient.signupUser({
      firstName: form.firstName,
      lastName: form.lastName,
      username: form.username,
      email: form.email,
      password: form.password,
    });
    if (error) setErrors((e) => ({ ...e, form: error }));
    if (data?.user) {
      setUser(data.user);
      apiClient.setToken(data.token);
    }

    setIsProcessing(false);
  };

  return (
    <div className="Register">
      <Navbar />
      <div className="card">
        <h2>Create Account</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <form noValidate autoComplete="off" className="register-form">
            <div className="name">
              <TextField
                type="text"
                variant="standard"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleOnInputChange}
              />
              <TextField
                type="text"
                variant="standard"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleOnInputChange}
              />
            </div>
            <div className="register-fields">
              <TextField
                type="text"
                variant="standard"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleOnInputChange}
              />
              <TextField
                type="email"
                variant="standard"
                name="email"
                placeholder="Enter a valid email"
                value={form.email}
                onChange={handleOnInputChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <TextField
                type="password"
                variant="standard"
                name="password"
                placeholder="Enter a secure password"
                value={form.password}
                onChange={handleOnInputChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
              <TextField
                type="password"
                variant="standard"
                name="passwordConfirm"
                placeholder="Confirm your password"
                value={form.passwordConfirm}
                onChange={handleOnInputChange}
              />
              {errors.passwordConfirm && <span className="error">{errors.passwordConfirm}</span>}
            </div>
            <Button
              className="btn"
              disabled={isProcessing}
              onClick={handleOnSubmit}
              variant="contained"
              fullWidth
              style={{ backgroundColor: "white" }}
            >
              {isProcessing ? "Loading..." : "Create Account"}
            </Button>
          </form>
        </div>
        <div className="footer">
          <p>
            Already have an account? Login <Link to="/login">here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
