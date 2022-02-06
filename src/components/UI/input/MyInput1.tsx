import React, {ChangeEvent} from 'react';
import styles from './Input.module.css'

type myInputType={
    type:string
    placeholder:string
    value:string
    getValueInput:(value:string)=>void
}

export const MyInput1 = ({value,...props}:myInputType) => {

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
        props.getValueInput(event.currentTarget.value)
    }

    return (
        <input onChange={onChangeHandler} value={value} {...props} className={styles.myInput}/>
    );
};
