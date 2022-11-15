import axios from "axios";

const getToken = () => {
  let token = localStorage.getItem("token");
  return token ? token : "";
};

const axiosUser = () =>
  axios.create({
    baseURL: "http://localhost:8000/users",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

const info = () => {
  return axiosUser().get("/info");
};


const update = (form) => {
    return axiosUser().put("/update",form)
}

const deleteUser =()=> {
    return axiosUser().delete("/delete")
}



const services = {
    info,
    update,
    deleteUser
};

export default services;
