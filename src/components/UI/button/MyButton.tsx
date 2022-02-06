import React from 'react';
import styles from './MyButton.module.css';

type myButtonType = {
    children:string
    disabled:boolean
}

export const MyButton = (props: myButtonType) => {
    return (
            <button {...props} className={styles.myBtn}>{props.children}</button>
    );
};

