import React, {createRef} from "react";
import {addPostActionCreator, writtingTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            dispatch(writtingTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;