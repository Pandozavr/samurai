let store = {
    _state:{
        ProfilePage: {
            PostData: [
                {id:"1", post:"First post"},
                {id:"2", post:"Second post"},
                {id:"3", post:"Third post"}
            ],
            writingText: "enter your text"
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
    },
    _callSubscriber() {
        console.log("test");
    },

    getState() {
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD-POST"){
            let newPost = {
                id:"4",
                post: this._state.ProfilePage.writingText
            }
            this._state.ProfilePage.PostData.push(newPost);
            this._state.ProfilePage.writingText = "";
            this._callSubscriber();
        } else if (action.type === "WRITING-TEXT-POST"){
            this._state.ProfilePage.writingText = action.text;
            this._callSubscriber();
        }
    }

};


export default store;