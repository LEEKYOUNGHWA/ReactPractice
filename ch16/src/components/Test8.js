import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Test8 = () => {

    const [data, setData] = useState({hits:[]})
    const [query, setQuery]=useState('html')

    useEffect ( ()=>{
        let completed = false
        async function get() {
            const result = 
            await axios (`http://hn.algolia.com/api/v1/search?query=${query}`)
            if(!completed){
                setData(result.data)
            }
        }
        get()
        return() =>{
            completed=true
        }
    }, [query])
    return (
        <div>
            <input type="text" value ={query} 
            onChange = {e=>setQuery(e.target.value)}/>
            <ul>
                {
                    data.hits.map(item=>(
                        <li key={item.objectId}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Test8;