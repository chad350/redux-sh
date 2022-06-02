import React from 'react';
import {useSelector} from "react-redux";

const ReadComponent = () => {

    // 뭘로하든상관없는데이터 -
    // {
    //     list : [],
    // }

    // reduxDate === 뭘로하든상관없는데이터
    // {
    //     list : [],
    // }
    const reduxData = useSelector((뭘로하든상관없는데이터)=>{
        return 뭘로하든상관없는데이터;
    })

    return (
        <div>
            <div> ReadComponent </div>
            <div>{reduxData.list.length}</div>
            {reduxData.list.map((mapped, idx)=>{
                return <div key={idx}>{mapped}</div>
            })}
        </div>

    );
};

export default ReadComponent;
