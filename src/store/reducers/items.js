import {
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_ERROR,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
  GET_ITEM_BY_ID_SUCCESS,
  GET_ITEM_BY_ID_ERROR,
} from "../actions/types";

const initialState = {
  items: [],
  item: '',
  loading: true,
  error: {},
};

export default function items(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    // GET ITEMS
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: payload.reverse(),
      };

    case GET_ITEM_BY_ID_SUCCESS:
      return {
        ...state,
        item: payload,
        loading: false,
      };

    // CREATE ITEM
    case CREATE_ITEM_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false
      };

    // DELETE ITEM
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        items: state.items.filter((item) => item.id !== payload),
      };

    // UPDATE ITEM
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        // items: payload,
      };

    // ERRORS
    case GET_ITEMS_ERROR:
    case CREATE_ITEM_ERROR:
    case DELETE_ITEM_ERROR:
    case UPDATE_ITEM_ERROR:
    case GET_ITEM_BY_ID_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
