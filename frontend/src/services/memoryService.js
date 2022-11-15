import axios from 'axios'
import baseURL from './baseURL'

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : ''
}

// const axiosMemories = () => axios.create({
//     baseURL: 'http://localhost:8000/memory',
//     headers: {
//         'Authorization': `Bearer ${getToken()}`
//     }
// })

const axiosMemories = () =>
  axios.create({
    baseURL: baseURL + "/memory",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

//getting all memory for user
const fetchmemory = () => {
    return axiosMemories().get('/fetchmemory')
}

const add = (addNewMemory) => {
    return axiosMemories().post("/add", addNewMemory);
}

//update a memory
const updatememory = (form) => {
  return axiosMemories().put(`/updatememory/${form.id}`,form);
};


//delete a memory
const deletememory = (id) => {
    return axiosMemories().delete(`/deletememory/${id}`)
}

//delete all memory for user
const deleteAll = () => {
    return axiosMemories().delete('/deleteAll')
}


const services = {
  // index,
  // add
   fetchmemory,
    deleteAll,
    add,
    deletememory,
  updatememory,
};

export default services