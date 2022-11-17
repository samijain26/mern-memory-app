import { useState } from "react";
import {  toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import authService from "../services/authService"
import userService from "../services/userService"

function Login({ setUser,showAlert }) {
  const navigate = useNavigate();

  let [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(
      //   "http://localhost:8000/auth/login",
      //   form
      // );

      const response = await authService.login(form);
      localStorage.setItem("token", response.data.token);
      
      const info = await userService.info();

      // const info = await axios.get("http://localhost:8000/users/info", {
      //   headers: {
      //     Authorization: `Bearer ${response.data.token}`,
      //   },
      // });

     
      setUser(info.data);
      toast.success("login successful", { autoClose: 1000 , toastId: 'success1'});
      navigate("/memory");
     
      
    } catch (error) {
      toast.error("invalid credential", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000
      });
      console.log(error.response.data.error);
      
    }
  };

  return (
    <>
      <div>
        <form className="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
          <br/><br/>
          <h1 className="pt-3 mt-4 row justify-content-center">
            <FaSignInAlt /> Login
          </h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              value={form.username}
              onChange={handleChange}
              id="username"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
              name="password"
              id="password"
            />
          </div>
          <div className=" d-flex justify-content-center">
            <button
              type="submit"
              className=" d-flex justify-content-center btn btn-dark mt-3"
              style={{ backgroundColor: "rgb(109, 5, 29" }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
