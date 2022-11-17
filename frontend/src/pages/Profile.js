

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService"
import memoryService from "../services/memoryService"
import { toast } from "react-toastify";
export default function Profile({ username, email, password, setUser }) {
    
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
      //let token = localStorage.getItem("token");
     
    try {


      // const response = await axios.put("http://localhost:8000/users/update",form, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      const response= await userService.update(form)
      //   const info = await axios.get("http://localhost:8000/users/info", {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });

     const info =await userService.info()

      console.log(response)
         toast("Information successfully updated", { autoClose: 2000 });
      setUser(info.data);
    
      navigate("/profile");

    } catch (error) {
      console.log(error);
    //   alert(error?.response?.data?.error);
    }
  };





  const deleteUser = async () => {
     
    // let token = localStorage.getItem("token");
    
    // const deleteall = await axios.delete(`http://localhost:8000/memory/deleteAll`,
    // {
    //   headers: {
    //        Authorization: `Bearer ${token}`,
    //      },

    //   }
    // )

    //memoryService.add()
     const deleteall = await memoryService.deleteAll()
      // console.log('Deleting all memory for user',deleteall)

    //  const remove = await axios.delete(
    //    `http://localhost:8000/users/delete`,
    //    {
    //      headers: {
    //        Authorization: `Bearer ${token}`,
    //      },
    //    }
    //  );

    const remove = await userService.deleteUser()
    
    console.log('remove user',remove)
     
    setUser({});
    localStorage.removeItem("token");
    
    //  alert("You are successfully unsubscribed")
    navigate("/");
     toast("you are successfully unsubscribed", { autoClose: 3000 });
   };

  return (
    <>
      <div className="d-flex offset-lg-4">
        <div className="mt-6">
          <br />
          <br /><br/>
          <h2 className="mt-4 ">Welcome {username.toUpperCase()} </h2>
          <h4 className="mt-3"> Your Email : {email}</h4>
        </div>
        {/* <i className="far fa-trash-alt mx-2" onClick={deleteUser}></i> */}
        {/* <i className="far fa-edit mx-2"></i> */}
      </div>
      <div className="d-flex offset-lg-4 ">
        <form onSubmit={handleSubmit}>
          <h2 className="mt-5">Update your information</h2>
          <div className="mt-3 d-flex align-items-evenly justify-content-left">
            <label htmlFor="username" className="form-label">
              <h4 className="d-flex mt-3">
                User name: {form.username.toUpperCase()}
              </h4>
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
          <div className="mt-2  ">
            <label htmlFor="email" className="form-label">
              <h4> Email</h4>
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
            <br />
          </div>
          <div className="d-flex align-items-evenly justify-content-center">
            <i className="far fa-edit mx-2" onClick={handleSubmit}></i>

            <i className="far fa-trash-alt mx-2" onClick={deleteUser}></i>
          </div>
        </form>
      </div>
    </>
  );
}

  