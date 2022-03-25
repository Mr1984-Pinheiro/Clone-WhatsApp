import React from "react";
import './ChatListItem.css'

    export default ({onClick}) => {
    return (
        <div className="chatListItem" 
             onClick={onClick}
        >
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt=""  />
            <div className="chatListItem--lines">
                <div className="chatListItem--line" >
                    <div className="chatListItem--name">Carlos Pinheiro</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line" >
                <div className="chatListItem--lastMsg">
                    <p>Hi, turo ben? lorijdijd hduhdujek djdkjfiue fgslgjorij fgifjgheirjfn dfvpfjdnrifg jgnirgjn jngfjg jrng afjgnriejg nvgf vpejnv pvjn vpjvnjvnrjv vjv </p>
                </div>
                </div>
            </div>
        </div>
    );
    }