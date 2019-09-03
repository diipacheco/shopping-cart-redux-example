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
      const addedItem = state.products.find(item => item.id === action.payload.id);
      const existedItem = state.addedItems.find(item => action.payload.id === item.id);
      if (existedItem) {
        addedItem.qty += 1;

        return {
          ...state,
          isMenuOpened: true,
        };
      }
      addedItem.qty = 1;
      const newTotal = state.checkoutTotal + addedItem.price;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        checkoutTotal: newTotal,
        isMenuOpened: true,
      };
    }
    case Types.REMOVE_FROM_CART: {
      console.log(state.addedItems);
      const newItems = state.addedItems.filter(item => action.payload.id !== item.id);
      return {
        ...state,
        addedItems: newItems,
      };
    }
    case Types.ADD_QUANTITY:
      return {};
    case Types.CHECKOUT_PRODUCTS:
      return {};
    case Types.SEARCH_PRODUCT:
      return {};
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
