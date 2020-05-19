import React, { useState, useEffect } from 'react';
import Image from './Image.js'

const Test1 = () => {
    const [data,setData] = useState(Image)
    const [no, setNo] = useState(0)
    
    useEffect ( () => {
        console.log('마운트')
        return () =>{
            console.log('뒷정리부분')
        }
    },[])

    const handleClick = (index) =>{
         setNo(index)
    }

    return (
        
        <div>
            <ul>
            {
                data.map((item,index) => 
                <li key ={index} style={{float:'left'}}>
                    <img onClick={() => handleClick(index)} src={item} alt="" style={{width:400, height:300}}/>
                </li> )
            }
            </ul>
            <p>
                <img src={data[no]} alt="" style={{width:800}} />
            </p>
        </div>
    );
};

export default Test1;