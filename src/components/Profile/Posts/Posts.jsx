import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
      <div> 
          <textarea></textarea>
          <button>Add</button>
          <Post m ='First post' />
          <Post m ='Second post' />
          <Post m ='Third post' />
      </div>
  )
}

export default Posts;