
import { useEffect, useRef, useState } from "react";
import MemoryItem from "../components/MemoryItem";

import memoryService from "../services/memoryService";


export default function Memories({ user, email, setUser }) {
  
  let [newmemory, setNewMemory] = useState([]); //add a new memory
  let [DeleteMemory, setDeleteMemory] = useState([]); //delete a memory
  let [form, setForm] = useState({}); //update a movies

  let imageRef = useRef();
  let titleRef = useRef();
  let desRef = useRef();
  let tagRef = useRef();

  const getAllMemories = async (user) => {
    // let token = localStorage.getItem("token");

    try {
      // let response = await axios.get(
      //   "http://localhost:8000/memory/fetchmemory",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      //console.log('response',response.data)


       const response = await memoryService.fetchmemory();
      
      setNewMemory(response.data.newmemory);
    } catch (error) {
      console.log(error);
    }
  };

  //initially bring all users memory and render when state variable changes
  useEffect(() => {
    getAllMemories();
    // eslint-disable-next-line
  }, [DeleteMemory, form]);

  //Adding a new memory on submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // let token = localStorage.getItem("token");
   
    let addNewMemory = {
      user,
      image: imageRef.current.value,
      title: titleRef.current.value,
      description: desRef.current.value,
      tag: tagRef.current.value,
    };
   
    try {
      // const response1 = await axios.post(
      //   "http://localhost:8000/memory/add",
      //   addNewMemory,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
     
    const response1 =  await memoryService.add(addNewMemory);

      console.log("addmemory response", response1.data);
      setNewMemory([...newmemory, response1.data.newmemory]);

      imageRef.current.value = "";
      titleRef.current.value = "";
      desRef.current.value = "";
      tagRef.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  //deleting a selected memory with the id

  const deleteItem = async (id) => {
    // let token = localStorage.getItem("token");
    // const remove = await axios.delete(
    //   `http://localhost:8000/memory/deletememory/${id}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    

    const remove = await memoryService.deletememory(id)


    console.log("2", remove.data.newmemory);
    
    setDeleteMemory([...newmemory]);
  };

  //update a memory

  const ref = useRef(null);
  const refClose = useRef(null);

  //fuction to pass existing value in the modal when update button is clicked
  const updateCurrentmemory = (currentMemory) => {
    ref.current.click();
    setForm({
      id: currentMemory._id,

      image: currentMemory.image,
      title: currentMemory.title,
      description: currentMemory.description,
      tag: currentMemory.tag,
    });
  };

  // catching on change controlled input for modal
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log("edied memory", form);
  };

  const handleClick = async (e, id) => {
    // let token = localStorage.getItem("token");
    // console.log("i am clicked", form.id);
    // console.log(token);
    // const response = await axios.put(
    //   `http://localhost:8000/memory/updatememory/${form.id}`,
    //   form,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );

const response = await memoryService.updatememory(form)


    console.log(response.data);
    setForm([response.data.newmemory]);
    refClose.current.click();
  };

  return (
    <div className="container my-4  ">
      <h1 className="d-flex justify-content-center">
        Start creating your memories which last forever
      </h1>
      <h3 className="mt-4 d-flex justify-content-center">
        Add a New Memory in your collection
      </h3>
      <div className='col-lg-6 offset-lg-3'>
        <form onSubmit={handleSubmit}>
          <div>
            {form.id}
            <label htmlFor="image" className="form-label">
              <h4 className="mt-2">Image URL</h4>
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
              <h4 className="mt-2">Title</h4>
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
              <h4 className="mt-2">DescriptionL</h4>
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
              <h4 className="mt-2">Tag</h4>
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
          <div className=" d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-lg btn-dark"
              style={{ backgroundColor: "rgb(109, 5, 29" }}
            >
              Add memory
            </button>
          </div>
        </form>
      </div>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">
                Edit Memory
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Image Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={form.image}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={onChange}
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
                    value={form.tag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-dark"
              >
                Update Memory
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1 className='text-center'>Your memory collection</h1>
        <div className="container mx-2">
          {newmemory.length === 0 && "No Memories to display"}
        </div>
        {newmemory.map((memoryitem) => {
          return (
            <MemoryItem
              key={memoryitem._id}
              memories={memoryitem}
              deleteMemory={deleteItem}
              updateCurrentmemory={updateCurrentmemory}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
}
      

  







 