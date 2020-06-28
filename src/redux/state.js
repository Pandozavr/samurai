import ProfileReducer from "./profile-reducer";
import DialogReducer from "./dialogs-reducer";


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
            ],
            newMessageText: "enter your text"
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

        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage, action);
        this._state.DialogsPage = DialogReducer(this._state.DialogsPage, action);

        this._callSubscriber();

    }

};

export default store;