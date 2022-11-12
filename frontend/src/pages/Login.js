import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
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
      const response = await axios.post(
        "http://localhost:8000/auth/login",
        form
      );
      const info = await axios.get("http://localhost:8000/users/info", {
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
      <h1>Login</h1>
      <div>
      <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      
    </>
  );
}

export default Login;
