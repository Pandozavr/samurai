import React from "react";
import styles from './find_friend.module.css';

let Find_friend = (props) => {

    if(props.users.length === 0){
        props.setUsers([
            {id:"1", photoURL: "https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg", followed: false, name:"Nom-Nom", status: "i am cool", location: {city: "Minsk", country: "Belarus"}},
            {id:"2", photoURL: "https://www.meme-arsenal.com/memes/549e8c6d71ae27a2ebd13a7580d71d80.jpg", followed: false, name:"Charley", status: "do it", location: {city: "Kiev", country: "Ukraine"}},
            {id:"3", photoURL: "https://i.mycdn.me/image?id=838968512981&ts=00000000190000012c&plc=WEB&tkn=*HgeUJJ9phxm9HWqJX7D7VF1zf5Y&fn=sqr_288", followed: true, name:"Susanin", status: "do it", location: {city: "Moskow", country: "Russia"}}
        ])
    }


    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoURL} className={styles.ffAvatar} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Find_friend;