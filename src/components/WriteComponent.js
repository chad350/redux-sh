import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {addWord, resetWord} from "../redux/module/baseReducer";

const WriteComponent = () => {

    const inputRef = useRef();

    const dispatch = useDispatch();

    function onClickButtonAdd(){
        const text = inputRef.current.value;

        dispatch(addWord(text));
    }

    function onClickButtonReset(){
        dispatch(resetWord());
    }
    
    return (
        <>
            <div>WriteComponent</div>
            <input ref={inputRef}></input>
            <button onClick={onClickButtonAdd}>버튼입니다.</button>
            <button onClick={onClickButtonReset}>초기화 버튼입니다.</button>
        </>
    );
};

export default WriteComponent;
