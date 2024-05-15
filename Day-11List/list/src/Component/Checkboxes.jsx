import React from 'react'
import { useState } from 'react'

export default function Checkboxes() {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, lable: "checkBox1", checked: false },
        { id: 2, lable: "checkBox1", checked: false },
        { id: 3, lable: "checkBox1", checked: false },
    ])

    const handleCheckbox = (id) => {
        const updateCheckBox = checkboxes.map((item) => {
            return item.id == id ? { ...item, checked: !item.checked } : item
        })
        setCheckboxes(updateCheckBox)
    }
    console.log(checkboxes)

    const handleAllChecked = () => {
        const AllChecked = checkboxes.every((item)=>item.checked);
        const update = checkboxes.map((item)=> ({
            ...item, checked:!AllChecked
        }) )
        setCheckboxes(update)
    }

    return (
        <div>
            <div>
                {
                    <label>
                        <input type="checkbox" checked={checkboxes.every((item) => item.checked)} onChange={handleAllChecked} />
                        All checked
                    </label>
                }
            </div>

            <div>
                {
                    checkboxes.map((item) => {
                        return <label>
                            < input type="checkbox" checked={item.checked} onChange={() => handleCheckbox(item.id)} />
                            {item.lable}
                        </label>
                    })

                }
            </div>

        </div >
    )
}
