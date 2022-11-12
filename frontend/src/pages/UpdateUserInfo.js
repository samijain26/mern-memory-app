import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaDelete, FaEdit } from "react-icons/fa";
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
     console.log('i am in delete user')
    let token = localStorage.getItem("token");
    
    // const deleteall = await axios.delete(`http://localhost:8000/memory/deleteAll`,
    // {
    //   headers: {
    //        Authorization: `Bearer ${token}`,
    //      },

    //   }
    // )
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
     navigate("/");
   };

  return (
    <>
      <form className="col-lg-6 offset-lg-3" onSubmit={handleSubmit}>
        <h2>
          <FaEdit /> Update
        </h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User name:{form.username}
          </label>

          {/* <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            value={form.username}
          /> */}
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
