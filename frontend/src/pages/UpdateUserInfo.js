import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UpdateUserInfo({ username, email, password, setUser }) {
    
      const navigate = useNavigate();
  let [form, setForm] = useState({
    username: username,
    password: password,
    email: email,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
      let token = localStorage.getItem("token");
      console.log(token)
    try {
      const response = await axios.put("http://localhost:8000/users/update",form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
        const info = await axios.get("http://localhost:8000/users/info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

    //   localStorage.setItem("token", response.data.token);
      setUser(info.data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    //   alert(error?.response?.data?.error);
    }
  };

   const deleteUser = async () => {
     let token = localStorage.getItem("token");
     const remove = await axios.delete(
       `http://localhost:8000/users/delete`,
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
    
     //setUser(remove.data);
     setUser({});
     localStorage.removeItem("token");
     alert("You are successfully unsubscribed")
     navigate("/register");
   };

  return (
    <>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
          {/* <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            aria-describedby="passwordHelpInline"
          /> */}
        </div>
        <div id="passwordHelpBlock" className="form-text">
          Your password must be 7-20 characters long, contain letters and must
          not contain spaces, special characters, or emoji.
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
        <button className="btn btn-primary" onClick={deleteUser}>
          Delete
        </button>
      </form>
    </>
  );
}
