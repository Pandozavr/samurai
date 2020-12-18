import React from "react";
import {addPost} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        PostData: state.ProfilePage.PostData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPost(newPostText))
        }
    }
};



const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;