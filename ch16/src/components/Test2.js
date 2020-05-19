import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const Test2 = () => {
    
    const [age,setAge] = useState(20)
    const [salary,setSalary]=useState(50000)
    
    const incrementAge = useCallback(() => {
        setAge ( age +1 )
        console.log(age)
    },[age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 2000)
        console.log(salary)
    },[salary])
    
    return (
        <div>
             <Title/>
            <Count text="age" count={age}/>
           <Button handleClick={incrementAge}>나이증가하기</Button>

            <Title/>
            <Count text="salary" count={salary}/>
            <Button handleClick={incrementSalary}>급여증가하기</Button> 
        </div>
    );
};

export default Test2;