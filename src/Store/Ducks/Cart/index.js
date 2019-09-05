import { Types } from './types';

const INITIAL_STATE = {
  products: [],
  addedItems: [],
  loading: false,
  error: false,
  isMenuOpened: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload.data,
      };
    case Types.ADD_TO_CART: {
      const itemToAdd = state.products.find(item => item.id === action.payload.id);
      const existedItem = state.addedItems.find(item => action.payload.id === item.id);

      if (existedItem) {
        itemToAdd.addedToCart += 1;
        if (itemToAdd.addedToCart >= 1) {
          itemToAdd.subtotal += itemToAdd.price;
        }

        return {
          ...state,
          addedItems: [...state.addedItems],
          isMenuOpened: true,
        };
      }
      itemToAdd.addedToCart = 1;
      return {
        ...state,
        addedItems: [...state.addedItems, itemToAdd],
        isMenuOpened: true,
        products: [...state.products],
      };
    }
    case Types.REMOVE_FROM_CART: {
      const newItems = state.addedItems.filter(item => action.payload.id !== item.id);
      return {
        ...state,
        addedItems: newItems,
      };
    }
    case Types.TOGGLE_CART:
      return {
        ...state,
        isMenuOpened: action.payload.toggle,
      };
    default:
      return state;
  }
};

export default reducer;
