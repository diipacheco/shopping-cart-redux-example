import { Types } from './types';

export function loadRequest() {
  return {
    type: Types.LOAD_REQUEST,
  };
}

export function loadSuccess(data) {
  return {
    type: Types.LOAD_SUCCESS,
    payload: {
      data,
    },
  };
}

export function loadFailure() {
  return {
    type: Types.LOAD_FAILURE,
  };
}

export function addToCart(id) {
  return {
    type: Types.ADD_TO_CART,
    payload: {
      id,
    },
  };
}

export function removeFromCart(id) {
  return {
    type: Types.REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
}

export function toggleCart(toggle) {
  return {
    type: Types.TOGGLE_CART,
    payload: {
      toggle,
    },
  };
}
