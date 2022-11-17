

import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

import Memories from "./pages/Memories";
import userService from './services/userService'



let initialRender = true;

function App() {
 const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

    
   
  
  
   const currentUserInfo = async (token) => {
     try {
      //  const info = await axios.get("http://localhost:8000/users/info", {
      //    headers: {
      //      Authorization: `Bearer ${token}`,
      //    },
      //  });
      //  console.log(info);
       
      const info = await userService.info();
       
       const { username, email } = info.data;
       setUser({ username, email });
     
     } catch (error) {
       let message = error.response.data.error;

       if (message?.includes("expire")) {
         localStorage.removeItem("token");
       }

       console.log(message);
     } finally {
       setIsLoading(false);
     }
   };

   useEffect(() => {
     let token = localStorage.getItem("token");

     if (initialRender) {
       if (token) {
         currentUserInfo(token);
         initialRender = false;
       } else {
         setIsLoading(false);
       }
     }
   }, []);


  let routes;
let loggedIn = user.username;
  if (!isLoading) {
    if (loggedIn) {
    
      routes = (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <Profile
                username={user.username}
                email={user.email}
                password={user.password}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/memory"
            element={
              <Memories
                user={user.username}
                email={user.email}
                setUser={setUser}
              />
            }
          />
          
         
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      );
    } else {
      routes = (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setUser={setUser}  />}
          />
          <Route path="/register" element={<Register setUser={setUser} />} />
        </Routes>
      );
    }
  }
  return (
    <>
      <div className="container ">
        <Navbar user={user.username} setUser={setUser} />

        {routes}
      </div>
      <ToastContainer  />
    </>
  );
}

export default App;

  
  // import './App.css';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import { Route, Routes } from "react-router-dom";
// import About from './components/About';
// import MemoryState from './context/memoryState.js';
// function App() {
//   return (
//     <>
//       <MemoryState>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//       </MemoryState>
//     </>
//   );
// }


// export default App;
