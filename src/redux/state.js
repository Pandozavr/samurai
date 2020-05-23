import {rerenderTree} from "../render";

let state = {
    ProfilePage: {
        PostData: [
            {id:"1", post:"First post"},
            {id:"2", post:"Second post"},
            {id:"3", post:"Third post"}
        ]
    },
    DialogsPage: {
        DialogData: [
            {id:"1", name: "Grizz"},
            {id:"2", name: "Panda"},
            {id:"3", name: "Chloe"},
        ],
        MessageData: [
            {id:"1", message: "Hi!"},
            {id:"2", message: "How are you?"},
        ]
    },
    Aside: {
        Friends:[
            {src: "https://p.kindpng.com/picc/s/185-1855366_transparent-default-avatar-png-we-bare-bears-grizz.png"},
            {src: "https://c7.hotpng.com/preview/331/66/347/chloe-park-grizzly-bear-food-truck-chloe-part-2-giant-panda-bear.jpg"},
            {src: "https://pm1.narvii.com/7212/cf418e7dd80dd75fb2d371d6a3167231493dba08r1-720-707v2_uhq.jpg"}
        ]
    }
};

export let addPost = (postText) => {
    let newPost = {
        id:"4",
        post: postText
    }
    state.ProfilePage.PostData.push(newPost);
    console.log(state.ProfilePage.PostData);
    rerenderTree();
}

export default state;