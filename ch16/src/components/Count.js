import React from 'react';

const Count = ({text, count}) => {
    return (
        <div>
            <h3>{text}/{count}</h3>
        </div>
    );
};

//값이 바뀔때만 실행하기
export default React.memo(Count);