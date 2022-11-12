import React from 'react'

export default function MemoryItem({memories}) {
    return (
      <div className="col-md-3 " >
        <div className="card my-3">
          <div className="card-body">
            <div>
              <img
                className="card-title"
                style={{ height: "100px", width: "150px" }}
                src={memories.image}
              />
            </div>
            <div className="d-flex align-items-center">
              <h5 className="card-title">{memories.title}</h5>
              <i className="far fa-trash-alt mx-2"></i>
              <i className="far fa-edit mx-2"></i>
            </div>
            <p className="card-text">{memories.description}</p>
          </div>
        </div>
      </div>
    );
}
