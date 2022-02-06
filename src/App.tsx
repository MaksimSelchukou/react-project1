import React, {useState} from 'react';
import './styles/App.css'
import {PostList} from "./components/PostList";
import {MyButton} from "./components/UI/button/MyButton";
import {MyInput} from "./components/UI/input/MyInput";
import {MyInput1} from './components/UI/input/MyInput1';
import MySelect from "./components/UI/select/MySelect";

export type postType = {
    id: number
    title: string
    body: string
}

function App() {


    const [posts, setPosts] = useState<Array<postType>>([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Javascript", body: "Description"},
        {id: 3, title: "Javascript", body: "Description"},
    ])

    const [namePost, setNamePost] = useState('')
    const [descriptionPost, setDescriptionPost] = useState('')

    const getValueInputName = (valueInp: string) => {
        setNamePost(valueInp)

    }
    const getValueInputDescription = (valueInp: string) => {
        setDescriptionPost(valueInp)

        // console.log(valueInp)
    }
    let id = Date.now()
    const addNewPost = () => {
        let newPost1 = {id: id, title: namePost, body: descriptionPost}
        setPosts([...posts, newPost1])
        setNamePost('')
        setDescriptionPost('')

    }

    const removePost = (postID: number) => {
        setPosts(posts.filter(f => f.id !== postID))
    }


    return (
        <div className="App">
            <MyInput getValueInput={getValueInputName}
                     type="text"
                     placeholder="Название поста"
                     value={namePost}
            />
            <MyInput getValueInput={getValueInputDescription}
                     type="text"
                     placeholder="Описание поста"
                     value={descriptionPost}
            />
            <MyButton newPost={addNewPost}>Создать пост</MyButton>
            <MySelect/>
            {posts.length !== 0
                ? <PostList removePost={removePost} number={id} posts={posts} title={'Посты про JavaScript'}/>
                : <h1 style={{textAlign: "center"}}>Посты не найдены</h1>}

        </div>
    );
}

export default App;
