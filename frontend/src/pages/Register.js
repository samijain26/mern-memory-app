import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaEdit } from "react-icons/fa";
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
      const response = await axios.post(
        "http://localhost:8000/auth/register",
        form
      );
      const info = await axios.get(
        "http://localhost:8000/users/info" ,{
        headers: {
          Authorization: `Bearer ${response.data.token}`,
        },
      });

      localStorage.setItem("token", response.data.token);
      setUser(info.data);
      navigate("/profile");
    } catch (error) {
      console.log(error.response.data.error);
      alert(error.response.data.error);
    }
  };

  return (
    <>
      <form className="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
        <h1><FaUser/>Register</h1>
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
        <div className="form-group"></div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </>
  );
}

export default Register;
