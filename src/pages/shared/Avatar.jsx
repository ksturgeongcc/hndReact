import React from "react";

import avatar from '../../assets/images/avatar.webp';

const Avatar = ({name, message}) => {
    return(
        <>
            <div className="w-[20%] absolute top-10 right-2">
                <p>{name}, {message}</p>
                <img src={avatar} alt="avatar" />
            </div>
        </>
    )
}

export default Avatar;