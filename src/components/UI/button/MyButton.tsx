import React from 'react';
import styles from './MyButton.module.css';

type myButtonType = {
    children: string
    // disabled:boolean
    // title: string
    newPost: () => void
}

export const MyButton = ({...props}: myButtonType) => {

    const addNewPost = () => {
        props.newPost()
    }

    return (
        <button onClick={addNewPost} className={styles.myBtn}>{props.children}</button>
    );
};

