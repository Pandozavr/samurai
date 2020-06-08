import React, {createRef} from "react";
import Post from "./Post";

const Posts = (props) => {

    let PostElements = props.ProfilePage.PostData.map(p => <Post m ={p.post}/>);

    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let newPostElement = React.createRef();

    let onChangeText = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "WRITING-TEXT-POST", text: text});
    }

  return (
      <div> 
          <textarea onChange={onChangeText} value={props.ProfilePage.writingText} ref={newPostElement}></textarea>
          <button onClick={addPost}>Add</button>
          {PostElements}
      </div>
  )
}

export default Posts;