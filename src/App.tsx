import React, {useState} from 'react';
import './styles/App.css'
import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";

export type postType = {
    id: number
    title: string
    body: string
}

function App() {


    const [posts, setPosts] = useState<Array<postType>>([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 1, title: "Javascript", body: "Description"},
        {id: 1, title: "Javascript", body: "Description"},
    ])


    return (
        <div className="App">
            <form>
                <input type="text" placeholder="Название поста"/>
                <input type="text" placeholder="Описание поста"/>
                {/*<button>Создать пост</button>*/}
                <MyButton disabled>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Посты про JavaScript'}/>


        </div>
    );
}

export default App;
