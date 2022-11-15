import React from 'react'

export default function MemoryItem({ memories, deleteMemory, updateCurrentmemory ,handleClick}) {
  return (
    <div className="col-md-3 ">
      <div className="card my-3">
        <div className="card-body">
          <div>
            <img className="card-img-top" src={memories.image} alt="love" />
          </div>
          <div className="d-flex align-items-left mt-3">
            <h4 className="card-title-info"> Title: </h4>
            <p> {memories.title}</p>
          </div>
          <div>
            <h4 className="card-title-info "> Description: </h4>
            <p>{memories.description}</p>
          </div>
          <div className="d-flex align-items-left mt-3">
            <h4 className="card-text"> Tag: </h4>
            <p>{memories.tag}</p>
          </div>
          <div>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => deleteMemory(memories._id)}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => updateCurrentmemory(memories)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
