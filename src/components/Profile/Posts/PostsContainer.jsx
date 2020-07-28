import React, {createRef} from "react";
import {addPostActionCreator, writtingTextActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../StoreContext";

const PostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }


                    let onChangeText = (text) => {
                        store.dispatch(writtingTextActionCreator(text));
                    }

                    return <Posts updatePostText={onChangeText}
                                  addPost={addPost}
                                  ProfilePage={state.ProfilePage}
                    />
                }
            }

        </StoreContext.Consumer>
    )
}

export default PostsContainer;