import React from 'react'

export default function MemoryItem({ memories, deleteMemory, updateCurrentmemory ,handleClick}) {
  return (
    <div className="col-md-3 ">
      <div className="card my-3">
        <div className="card-body">
          <div>
            <img className="card-img-top" src={memories.image} />
          </div>
          <div className="d-flex align-items-center">
            <h5 className="card-title">{memories.title}</h5>
            <i
              className="far fa-trash-alt mx-2"
              onClick={() => deleteMemory(memories._id)}
            ></i>
            <i
              className="far fa-edit mx-2"
              onClick={() => updateCurrentmemory(memories)}
            ></i>
          </div>
          <p className="card-text">{memories.description}</p>
        </div>
      </div>
    </div>
  );
}
