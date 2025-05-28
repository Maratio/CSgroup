import React from 'react';
import classes from './MyInput.module.css'



interface Props {
  placeholder?: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MyInput = (props: Props) => {
    return (
        <input className={classes.myInput}  {...props} />
    );
}

export default MyInput;
