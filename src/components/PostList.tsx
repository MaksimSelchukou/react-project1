import React from 'react';
import {PostItem} from "./PostItem";
import {postType} from "../App";

type postListType = {
    posts: Array<postType>
    title: string
    number: number
    removePost:(postID:number)=>void
}


export const PostList = ({number, posts, title, ...props}: postListType) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem removePost={props.removePost} number={index + 1} key={post.id} id={post.id} title={post.title} body={post.body}/>
            )}
        </div>
    );
};
