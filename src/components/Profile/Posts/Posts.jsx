import React from "react";
import Post from "./Post";

let PostData = [
    {id:"1", post:"First post"},
    {id:"2", post:"Second post"},
    {id:"3", post:"Third post"}
];

const Posts = () => {

    let PostElements = PostData.map(p => <Post m ={p.post}/>);

  return (
      <div> 
          <textarea></textarea>
          <button>Add</button>
          {PostElements}
      </div>
  )
}

export default Posts;