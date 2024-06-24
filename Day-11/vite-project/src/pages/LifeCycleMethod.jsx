import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function LifeCycleMethod() {

    const[count, setCount] = useState(0);


    useEffect(() => {
        console.log('Commponent is created(ComponentDidMount)');

        // cleanup function 
        return () => {
            console.log('Component is deleted(component will unmount) ')
        }
    }, [])  // 

    useEffect(()=> {
        console.log("component is updated")
    },[count])




    return (
        <div>
            <h1>LifeCycleMethod</h1>
            <button onClick={()=>setCount(count+1)} >Increment</button>

        </div>
    )
}

