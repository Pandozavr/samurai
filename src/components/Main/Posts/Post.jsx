import React from "react";
import Style from "./Post.module.css"

const Post = () => {
    return (
        <div>
            <img className={Style.avaPost} src="https://trikky.ru/wp-content/blogs.dir/1/files/2019/07/17/images-1-1.jpg" />
            post text
        </div>
    )
}

export default Post;