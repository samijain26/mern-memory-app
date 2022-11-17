
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import authService from "../services/authService";
import userService from "../services/userService";
import { toast } from "react-toastify";
function Register({ setUser }) {
  const navigate = useNavigate();

  let [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(
      //   "http://localhost:8000/auth/register",
      //   form
      // );

       const response = await authService.register(form);
        console.log(response)
       localStorage.setItem("token", response.data.token);
      
      const info = await userService.info();
      
      // const info = await axios.get(
      //   "http://localhost:8000/users/info" ,{
      //   headers: {
      //     Authorization: `Bearer ${response.data.token}`,
      //   },
      // });

     
      setUser(info.data);
      toast.success("You are successfully registered", { autoClose: 1000 });
      navigate("/memory");
    } catch (error) {
     
      toast.error("username exists",{autoClose: 1000});
    }
  };

  return (
    <>
      <form className="col-lg-6 offset-lg-3 " onSubmit={handleSubmit}>
        <br/><br/>
        <h1 className="pt-3 mt-4 row justify-content-center">
          <FaUser />
          Register
        </h1>
        <div className="form-group mb-3">
          <label htmlFor="username" className="form-label">
            User name
          </label>

          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={form.username}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <br />
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <br />
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            aria-describedby="passwordHelpInline"
          />
        </div>
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 7-20 characters long, contain letters and must
          not contain spaces, special characters, or emoji.
        </div>
        <div className=" d-flex justify-content-center mt-3">
          <button
            type="submit"
            className="btn btn-dark d-flex justify-content-center"
            style={{ backgroundColor: "rgb(109, 5, 29" }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
