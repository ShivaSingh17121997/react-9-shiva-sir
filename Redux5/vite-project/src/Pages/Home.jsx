import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
    const userData = useSelector(store => store)
    console.log(userData)
    return (
        <div>

        </div>
    )
}
