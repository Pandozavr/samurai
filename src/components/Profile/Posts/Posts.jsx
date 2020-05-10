import React from "react";
import Post from "./Post";

let PostData = [
    {id:"1", post:"First post"},
    {id:"2", post:"Second post"},
    {id:"3", post:"Third post"}
];

const Posts = () => {
  return (
      <div> 
          <textarea></textarea>
          <button>Add</button>
          <Post m ={PostData[0].post}/>
          <Post m ={PostData[1].post}/>
          <Post m ={PostData[2].post}/>
      </div>
  )
}

export default Posts;