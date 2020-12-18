import React from "react";
import Post from "./Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validation_form/validators";
import {ElementCreator} from "../../common/FormControl/FormControls";

let maxLengthPost = maxLengthCreator(20);

const Textarea = ElementCreator("textarea");


const Posts = React.memo( props => {

    console.log("render");

    let PostElements = props.PostData.map(p => <Post m ={p.post}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    };

  return (
      <div>
          <PostFormRedux onSubmit={addNewPost} />
          {PostElements}
      </div>
  )
});

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name={"newPostText"} validate={[required, maxLengthPost]}/>
            <button>Add</button>
        </form>
    )
};

const PostFormRedux = reduxForm({form: "ProfilePostForm"})(PostForm);

export default Posts;