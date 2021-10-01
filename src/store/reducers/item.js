import {
    GET_ITEM_BY_ID_SUCCESS,
    GET_ITEM_BY_ID_ERROR,
  
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_ERROR,
  
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_ERROR,
  } from "../actions/types";
  
  const initialState = {
    item: null,
    loading: true,
    error: {},
  };
  
  export default function item(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
    
      // GET ITEM BY ID
      case GET_ITEM_BY_ID_SUCCESS:
        return {
          ...state,
          item: payload,
          loading: false,
        };
  
      // DELETE ITEM
      case DELETE_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
        };
  
      // UPDATE ITEM
      case UPDATE_ITEM_SUCCESS:
        return {
          ...state,
          loading: false,
          item: payload
        };
  
      // ERRORS
      case GET_ITEM_BY_ID_ERROR:
      case DELETE_ITEM_ERROR:
      case UPDATE_ITEM_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  