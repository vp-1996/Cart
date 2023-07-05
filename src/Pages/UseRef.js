import React, { useRef } from 'react'
import IDvsREF from './IDvsREF';

const UseRef = () => {

    const inputRef = useRef(null);
    const textAreaRef = useRef(null);

    const handleSubmit = () => {
        // alert(inputRef.current.value);
        textAreaRef.current.value = inputRef.current.value;
        textAreaRef.current.focus()
        inputRef.current.value = ""
    }

    return (
        <div>
            <h4>useRef hook example</h4>
            <input type='text' ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
            <textarea ref={textAreaRef} />

            <IDvsREF color="red" />
            <IDvsREF color="green" />
            <IDvsREF color="blue" />


        </div>
    )
}

export default UseRef
