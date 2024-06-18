import React, { memo, useEffect, useMemo, useRef, useState } from 'react'

export default function UseRefhook() {
    const [count, setCount] = useState(0);
    const timerRef = useRef(null)
    console.log(timerRef)


    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCount(prev => prev + 1)

        }, 1000);


        return () => {
            console.log("component is unmounted")
            clearInterval(timerRef.current)
        };
    }, [])

    const memoizedVal = useMemo(() => {
        let n = 10;
        let count = 0;
        for (let i = 0; i < 10000000000; i++) {
            count += i
        }

        console.log(count)
        return count;

    }, [])
    console.log(memoizedVal)



    return (
        <div>
            <h1>count:{count}</h1>
            <button onClick={() => clearInterval(timerRef.current)}>Stop Timer</button>
        </div>
    )
}
