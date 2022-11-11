import React from 'react'

export default function Home() {
  return (
    <div>
      
    </div>
  )
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
