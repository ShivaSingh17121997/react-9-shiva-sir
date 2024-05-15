import React, { useState } from 'react'

export default function Checkbox1() {

    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: "Checkbox1", checked: false },
        { id: 2, label: "Checkbox1", checked: false },
        { id: 3, label: "Checkbox1", checked: false }
    ])

    const handleAllCheckbox = () => {
        const allChecked = checkboxes.every((item) => item.checked);

        const updateCheckboxAll = checkboxes.map((item) => ({
            ...item, checked: !allChecked
        })
        )

        setCheckboxes(updateCheckboxAll)

    }

    const handleCheckBox = (id) => {
        const updateCheckbox = checkboxes.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        setCheckboxes(updateCheckbox)
    }
    console.log(checkboxes)


    return (
        <div>
            <div>
                <label >
                    <input type="checkbox" checked={checkboxes.every((checkboxe) => checkboxe.checked)} onChange={handleAllCheckbox} />
                    Select All
                </label>
            </div>

            <div>
                {checkboxes.map((item) => {
                    return (
                        <div>
                            <label key={item.id} >
                                <input type="checkbox" checked={item.checked} onChange={() => handleCheckBox(item.id)} />
                                {item.label}
                            </label>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
