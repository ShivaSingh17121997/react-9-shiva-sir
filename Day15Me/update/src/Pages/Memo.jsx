import React, { useCallback, useMemo, useState } from 'react'

export default function Memo() {
    const [sum, setSum] = useState(0)
    let arr = [3, 4, 3, 2, 4, 5, 33,]

   

    const MemoSum = useCallback((arr) => {
        let sum = 0; 
        for(let i=0; i<arr.length; i++){
            sum += arr[i]
        }
        return sum
    },[])

    const memoizedVal = useMemo(() => {
        console.log("useMemo hook")
        return MemoSum(arr);
    }, [arr])

    // function Sum(arr) {
    //     let sum = 0;
    //     for (let i = 0; i < arr.length; i++) {
    //         sum += arr[i]
    //     }
    //     return sum;
    // }
    console.log(memoizedVal, "memoized val")

    const handleSum = () => {

        setSum(memoizedVal)
    }

    console.log(sum, "sum")

    return (
        <div>
            <h1 onClick={handleSum}  >sum : {sum}</h1>
        </div>
    )
}
