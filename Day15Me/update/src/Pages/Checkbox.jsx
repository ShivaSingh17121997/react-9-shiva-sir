import React, { useState } from 'react';

function Checkbox() {
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Checkbox 1', checked: false },
        { id: 2, label: 'Checkbox 2', checked: false },
        { id: 3, label: 'Checkbox 3', checked: false },
        // Add more checkboxes as needed
    ]);

    const handleCheckboxChange = (id) => {
        const updatedCheckboxes = checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        );
        setCheckboxes(updatedCheckboxes);
    };

    const handleSelectAllChange = () => {
        const allChecked = checkboxes.every((checkbox) => checkbox.checked);
        const updatedCheckboxes = checkboxes.map((checkbox) => ({
            ...checkbox,
            checked: !allChecked,
        }));
        setCheckboxes(updatedCheckboxes);
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={checkboxes.every((checkbox) => checkbox.checked)}
                    onChange={handleSelectAllChange}
                />
                Select All
            </label>
            {checkboxes.map((checkbox) => (
                <label key={checkbox.id}>
                    <input
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={() => handleCheckboxChange(checkbox.id)}
                    />
                    {checkbox.label}
                </label>
            ))}
        </div>
    );
}

export default Checkbox;
