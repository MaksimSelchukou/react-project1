import React from 'react';
import {PostItem} from "./PostItem";
import {postType} from "../App";

type postListType={
    posts:Array<postType>
    title:string
}

export const PostList = ({posts,title,...props}:postListType) => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{title}</h1>
            {posts.map(post =>
                <PostItem key={post.id} id={post.id} title={post.title} body={post.body}/>
            )}
        </div>
    );
};

