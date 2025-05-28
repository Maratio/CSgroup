import React from 'react';

interface Props {
  placeholder?: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const MyInput = (props: Props) => {
    return (
        <input  {...props} />
    );
}

export default MyInput;
