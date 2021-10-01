import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,

  GET_ITEM_BY_ID_SUCCESS,
  GET_ITEM_BY_ID_ERROR,

  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_ERROR,

  DELETE_ITEM_ERROR,
  DELETE_ITEM_SUCCESS,

  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
} from "./types";



// GET ALL ITEMS
export const getItems = () => async (dispatch) => {
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL + "/api/items");
    console.log("Items action res:", res);
    dispatch({
      type: GET_ITEMS_SUCCESS,
      // payload: res.data.results,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_ITEMS_ERROR,
      payload: { msg: "Server error. Something went wrong" },
    });
  }
};


// GET ITEM BY ID
export const getItemById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      process.env.REACT_APP_API_URL + `/api/items/${id}`
    );
    // console.log("result:", res);
    dispatch({
      type: GET_ITEM_BY_ID_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ITEM_BY_ID_ERROR,
      payload: { msg: "Server error. Something went wrong" },
    });
  }
};


// CREATE ITEM
export const createItem = (formData) => async dispatch => {
  try {
    const res = await axios.post(process.env.REACT_APP_API_URL + '/api/items', formData)
    dispatch({
      type: CREATE_ITEM_SUCCESS,
      payload: res.data
    })
    dispatch(setAlert('Item created', 'success'))
  } catch(err) {
    dispatch({ type: CREATE_ITEM_ERROR })
    dispatch(setAlert('Error creating item', 'error'))
  }
}


// DELETE ITEM
export const deleteItem = (id) => async dispatch => {
  try {
    await axios.delete(process.env.REACT_APP_API_URL + `/api/items/${id}`)
    dispatch({
      type: DELETE_ITEM_SUCCESS,
      payload: id
    })
    dispatch(setAlert('Item removed', 'success'))
  } catch(err) {
    dispatch({ 
      type: DELETE_ITEM_ERROR,
      error: err
    })
  }
}


// UPDATE ITEM 
export const updateItem = item => async dispatch => {
  try {
    const res = await axios.put(process.env.REACT_APP_API_URL + `/api/items/${item.id}`, item)
    
    dispatch({
      type: UPDATE_ITEM_SUCCESS,
      payload: res.data
    })
    dispatch(setAlert('Item data successfully updated', 'success'))
  } catch(err) {
      dispatch({ type: UPDATE_ITEM_ERROR })
      dispatch(setAlert('Update error', 'error'))
  }
}