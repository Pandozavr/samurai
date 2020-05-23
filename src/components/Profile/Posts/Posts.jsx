import React, {createRef} from "react";
import Post from "./Post";

const Posts = (props) => {

    let PostElements = props.PostData.map(p => <Post m ={p.post}/>);

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }

    let newPostElement = React.createRef();

  return (
      <div> 
          <textarea ref={newPostElement}></textarea>
          <button onClick={addPost}>Add</button>
          {PostElements}
      </div>
  )
}

export default Posts;