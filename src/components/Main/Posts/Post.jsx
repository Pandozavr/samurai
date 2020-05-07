import React from "react";
import Style from "./Post.module.css"

const Post = (props) => {
    return (
        <div>
            <img className={Style.avaPost} src="https://trikky.ru/wp-content/blogs.dir/1/files/2019/07/17/images-1-1.jpg" />
            { props.m }
        </div>
    )
}

export default Post;