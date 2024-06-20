import React from 'react';
import axios from 'axios'
import { GET_TODO } from './ActionTypes';

export default function Actionl() {
  return (
    <div>Actionl</div>
  )
}

//get todo

export const getTodo = (dispatch) => {
  axios.get(`http://localhost:8080/todo`)
    .then((res) => {
      dispatch({ type: GET_TODO, payload: res.data });
    })
    .catch(err => console.error(err));

}







