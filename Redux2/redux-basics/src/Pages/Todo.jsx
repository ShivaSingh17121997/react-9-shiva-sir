import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO, DELETE_TODO, GET_TODO, UPDATE_TODO } from '../Redux/ActionTypes';
import axios from 'axios';
import styled from 'styled-components';

export default function Todo() {
    const [inputData, setInputData] = useState("");
    const [edit, setEdit] = useState(null);
    const [completed, setCompleted] = useState(false);
    const [category, setCategory] = useState("");
    const dispatch = useDispatch();

    const todoData = useSelector(store => store.todo);

    const handleTodoSubmit = (e) => {
        e.preventDefault();

        if (edit) {
            axios.patch(`http://localhost:9090/todo/${edit.id}`, {
                todo: inputData,
                completed: completed,
                category: category
            })
                .then((res) => {
                    console.log("data updated successfully");
                    dispatch({ type: UPDATE_TODO, payload: res.data });
                    setInputData("");
                    setCompleted(false);
                    setCategory("");
                    setEdit(null);
                });
        } else {
            axios.post(`http://localhost:9090/todo`, {
                todo: inputData,
                completed: completed,
                category: category
            })
                .then((res) => {
                    console.log("data added successfully");
                    dispatch({ type: ADD_TODO, payload: res.data });
                    setInputData("");
                    setCompleted(false);
                    setCategory("");
                });
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:9090/todo`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: GET_TODO, payload: res.data });
            });
    }, [dispatch]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:9090/todo/${id}`)
            .then((res) => {
                console.log("data deleted successfully", res.data);
                dispatch({ type: DELETE_TODO, payload: id });
            });
    };

    const handleEdit = (id) => {
        const isEdited = todoData.find((item) => item.id === id);
        setEdit(isEdited);
        setInputData(isEdited.todo);
        setCompleted(isEdited.completed);
        setCategory(isEdited.category);
    };

    return (
        <Container>
            <Header>Todo App with Redux</Header>
            <Form onSubmit={handleTodoSubmit}>
                <Input
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    type="text"
                    placeholder='Enter your todo'
                />


                <CheckboxContainer>
                    <Checkbox
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                    <Label>Completed</Label>
                </CheckboxContainer>
                <Select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Select category</option>
                    <option value="public">Public</option>
                    <option value="personal">Personal</option>
                    <option value="home">Home</option>
                </Select>
                <Button type="submit">{edit ? "Update" : "Add"}</Button>
            </Form>
            <TodoList>
                {todoData.map((item) => (
                    <TodoItem key={item.id}>
                        <TodoText>{item.todo}</TodoText>


                        
                        <TodoStatus>{item.completed ? "Completed" : "Not Completed"}</TodoStatus>
                        <TodoCategory>{item.category}</TodoCategory>
                        <EditButton onClick={() => handleEdit(item.id)}>Edit</EditButton>
                        <DeleteButton onClick={() => handleDelete(item.id)}>Delete</DeleteButton>
                    </TodoItem>
                ))}
            </TodoList>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    border-radius: 8px;
    background-color: #f9f9f9;
`;

const Header = styled.h1`
    text-align: center;
    color: #333;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Checkbox = styled.input`
    margin-right: 10px;
`;

const Label = styled.label`
    font-size: 16px;
`;

const Select = styled.select`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #218838;
    }
`;

const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const TodoItem = styled.div`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TodoText = styled.h4`
    margin: 0;
    font-size: 16px;
`;

const TodoStatus = styled.h4`
    margin: 0;
    font-size: 16px;
`;

const TodoCategory = styled.h5`
    margin: 0;
    font-size: 14px;
    color: #666;
`;

const EditButton = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #ffc107;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        background-color: #e0a800;
    }
`;

const DeleteButton = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    background-color: #dc3545;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    &:hover {
        background-color: #c82333;
    }
`;
