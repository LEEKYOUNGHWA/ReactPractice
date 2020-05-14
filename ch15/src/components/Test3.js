import React, { useState } from 'react';
import Mouse from './Mouse';

const Test3 = () => {
    const[visible, setVisible] = useState(false)

    const handleTlggle = () =>{
        //visible 값 true false로 바꾸기
        setVisible(!visible)
    }

    return (
        <div>
             <button onClick={handleTlggle}>보이기/숨기기</button>
             {/* visible 이 true 이면 mouse.js 보이고 false 이면 숨기기 */}
             {visible && <Mouse/>}
        </div>
    );
};

export default Test3;