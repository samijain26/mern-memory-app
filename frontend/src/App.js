

import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import UpdateUserInfo from "./pages/UpdateUserInfo";

function App() {
  const [user, setUser] = useState({});

  let routes;

  if (user.username) {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <Profile
              username={user.username}
              email={user.email}
              setUser={setUser}
            />
          }
        />
        <Route
          path="/updateInfo"
          element={
            <UpdateUserInfo
              username={user.username}
              email={user.email}
              password={user.password}
              setUser={setUser}
            />
          }
        />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
      </Routes>
    );
  }

  return (
    <div className="app">
      <Navbar user={user.username} setUser={setUser} />
      {routes}
    </div>
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
