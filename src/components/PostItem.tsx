import React from 'react';


type postItemType={
    id:number
    title:string
    body:string
}

export const PostItem = ({id,title,body,...props}:postItemType) => {
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{id}.{title}</strong>
                    <div>
                        {body}
                    </div>
                </div>
                <div className="post__btns">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};
