import React, { useState, useEffect } from 'react';

export default function Home() {
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const [filter, setFilter] = useState("");

    // Fetching the data
    useEffect(() => {
        fetch(`http://localhost:8080/users`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setOriginalData(data);
                console.log(data);
            });
    }, []);

    // Filter the data
    // useEffect(() => {
    //     if (filter !== "") {
    //         const filteredData = originalData.filter(
    //             (item) => item.category === filter
    //         );
    //         setData(filteredData);
    //     } else {
    //         setData(originalData);
    //     }
    // }, [filter, originalData]);

    useEffect(() => {
        if (filter !== "") {
            const filteredData = originalData.filter((item) => item.category === filter)
            setData(filteredData)
        }
        else {
            setData(originalData)
        }
    }, [filter, originalData])


    useEffect(() => {
        if (filter !== "") {
            const filteredData = originalData.filter((item) => item.category == filter);
            setData(filteredData)
        } else {
            setData(originalData)
        }


    }, [filter, originalData])

    // Handle filter change
    const handleFilterChange = (category) => {
        setFilter(category);
    };



    // Handle edit
    const handleEdit = (id) => {
        const editItem = data.find((item) => item.id === id);
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, editing: true } : item
        );
        setData(updatedData);
    };

    // Handle update
    const handleUpdate = (id) => {
        const updatedData = data.map((item) =>
            item.id === id
                ? { ...item, title: item.editTitle, price: item.editPrice, editing: false }
                : item
        );
        setData(updatedData);
    };

    return (
        <div>
            <div>
                <button onClick={() => handleFilterChange("laptops")}>
                    Filter By Laptops
                </button>
                <button onClick={() => handleFilterChange("skincare")}>
                    Filter By Skincare
                </button>
                <button onClick={() => handleFilterChange("")}>
                    Clear Filter
                </button>
            </div>

            <div>
                {data.map((item, i) => {
                    return (
                        <div style={{}} key={item.id}>
                            <img src={item.images[0]} alt="" />
                            <h3>{item.name}</h3>
                            <p>{item.age}</p>

                            {item.editing ? (
                                <div>
                                    <input
                                        value={item.editTitle || ''}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setData(data.map((item) => {
                                                if (item.id === id) {
                                                    return { ...item, editTitle: value };
                                                }
                                                return item;
                                            }));
                                        }}
                                        type="text"
                                        placeholder="Edit Title"
                                    />
                                    <input
                                        value={item.editPrice || ''}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            setData(data.map((item) => {
                                                if (item.id === id) {
                                                    return { ...item, editPrice: value };
                                                }
                                                return item;
                                            }));
                                        }}
                                        type="text"
                                        placeholder="Edit Price"
                                    />
                                    <button onClick={() => handleUpdate(item.id)}>Save</button>
                                </div>
                            ) : (
                                <div>
                                    <h1>{item.title}</h1>
                                    <p>{item.category}</p>
                                    <p>{item.price}</p>
                                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
