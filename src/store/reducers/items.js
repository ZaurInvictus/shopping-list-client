import {
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR,
    
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_ERROR,
  } from "../actions/types";
  
  const initialState = {
    items: [],
    loading: true,
    error: {},
  };
  
  export default function items(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      // GET ITEMS
      case GET_ITEMS_SUCCESS:
        //console.log('payload from items reducer:', payload)
        return {
          ...state,
          loading: false,
          items: payload.results.reverse(),
        };
  
      // CREATE ITEM
      case CREATE_ITEM_SUCCESS:
        return {
          ...state,
          items: [payload, ...state.items],
          // loading: false
        };
  
      // ERRORS
      case GET_ITEMS_ERROR:
      case CREATE_ITEM_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  