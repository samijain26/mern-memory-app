import React from 'react'

export default function AddMemory() {
  return (
    <div className="container  ">
      <h2>Add a New Memory in your collection</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {form.id}
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
</div>
  )
}
