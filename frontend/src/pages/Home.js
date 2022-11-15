import React from 'react'

export default function Home() {
  return (
    <div className="cards" style={{ maxwidth: "1000px", height: "800px" }}>
      <>
        {/* <div className="card d-flex mt-4" style={{ maxwidth: "25rem" }}> */}
        <div
          className="card-header d-flex justify-content-center "
          style={{ maxwidth: "25rem" }}
        >
          <figure className="text-center  p-4 fs-2">
            <blockquote className="blockquote fs-4  ">
              <h1 className="card-title display-1 text-center mt-2 p-3  ">
                Welcome to Memory app
              </h1>
              <p className="fst-italic mt-2">
                We all have our time machines. Some takes us back,they are
                called Memories. Some takes us forward, they are called Dreams
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Source Title ">Jeremy Irons</cite>
            </figcaption>
          </figure>
        </div>
        <div className="card-body ">
          <p className=" mb-5 text-bg-success bg-gradient px-4 py-4 fs-3">
            Memory app is the place where you can create,organize,update or
            delete a memory which is close to your heart. Simply register your
            account today and start building your life time treasure.
          </p>
        </div>
        {/* </div> */}
      </>
    </div>
  );
}

  
  
  
 // import React, { useContext } from 'react'
 
// import memoryContext from "../context/memoryContext.js"
// export default function Home() {

//   const context = useContext(memoryContext);
//   const {memories,setMemories} = context
// console.log(memories)
//   return (
//     <div>
//       <div className="container my-3">
//         <h1>Add new momory</h1>
//         <form className="container my-3">
//           <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label">
//               Email address
//             </label>
//             <input
//               type="email"
//               class="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//             <div id="emailHelp" class="form-text">
//               We'll never share your email with anyone else.
//             </div>
//           </div>
//           <div class="mb-3">
//             <label for="exampleInputPassword1" class="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               class="form-control"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <div class="mb-3 form-check">
//             <input
//               type="checkbox"
//               class="form-check-input"
//               id="exampleCheck1"
//             />
//             <label class="form-check-label" for="exampleCheck1">
//               Check me out
//             </label>
//           </div>
//           <button type="submit" class="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//       <div className="container my-3">
//         <h1>your memory collection</h1>
//         {memories.map((memory) => {
//           return memory.title
//         })
          
//       }
//       </div>
//     </div>
//   );
// }




