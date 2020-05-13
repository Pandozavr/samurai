import React from "react";
import Post from "./Post";

const Posts = (props) => {

    let PostElements = props.PostData.map(p => <Post m ={p.post}/>);

  return (
      <div> 
          <textarea></textarea>
          <button>Add</button>
          {PostElements}
      </div>
  )
}

export default Posts;