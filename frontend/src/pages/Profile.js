import { FaSignInAlt, FaSignOutAlt, FaUser, FaEdit } from "react-icons/fa";
import axios from "axios";

import { useEffect, useRef, useState } from "react";
import MemoryItem from "../components/MemoryItem";


export default function Profile({ user, email }) {
 
  

  let [newmemory, setNewMemory] = useState([]);
  let [DeleteMemory, setDeleteMemory] = useState([]);
  let [updateMemory, setUpdateMemory] = useState([]);
 
  let imageRef = useRef();
  let titleRef = useRef();
  let desRef = useRef();
  let tagRef = useRef();
  
   
  
  const getAllMemories = async (user) => {
    let token = localStorage.getItem("token");
   
    try {
      let response = await axios.get("http://localhost:8000/memory/fetchmemory", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
console.log('response',response.data)
      setNewMemory(response.data.newmemory);

    } catch (error) {
      console.log(error);
    }
  };
  console.log(newmemory);
  
  useEffect(() => {
    
    getAllMemories();
  }, []);

  //Adding a new memory on submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    let token = localStorage.getItem("token");

    let addNewMemory = {
      user: user,
      image: imageRef.current.value,
      title: titleRef.current.value,
      description: desRef.current.value,
      tag: tagRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/memory/add",
        addNewMemory,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('addmemory response'+response.data);
      setNewMemory([...newmemory, response.data.newmemory]);
      
      imageRef.current.value = "";
      titleRef.current.value = "";
      desRef.current.value = "";
      tagRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container  ">
      <h2>Add a New Memory in your collection</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            ref={imageRef}
            required
          />
        </div>
        <div>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            ref={titleRef}
            minLength={3}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            ref={desRef}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            ref={tagRef}
            minLength={2}
            required
          />
        </div>

        <button type="submit" className="btn btn-lg btn-dark">
          Add memory
        </button>
      </form>

      <div className="row my-3">
        <h2>Your memory collection</h2>
        <div className="container mx-2">
          {newmemory.length === 0 && "No Memories to display"}
        </div>
        {newmemory.map((memoryitem) => {
          return <MemoryItem key={memoryitem._id} memories={memoryitem} />;
        })}
      </div>
    </div>
  );}
      
