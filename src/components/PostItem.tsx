import React from 'react';
import {MyButton} from "./UI/button/MyButton";


type postItemType={
    id:number
    title:string
    body:string
    number:number
    removePost:(postID:number)=>void
}

export const PostItem = ({number,id,title,body,...props}:postItemType) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{number}.{title}</strong>
                    <div>
                        {body}
                    </div>
                </div>
                <div className="post__btns">
                    <button onClick={()=>{props.removePost(id)}}>Delete</button>
                    {/*<MyButton removePost={removePost} >Delete</MyButton>*/}
                </div>
            </div>
        </div>
    );
};
