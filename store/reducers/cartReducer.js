import { ADD_ITEM, CHECKOUT, REMOVE_ITEM } from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const item = action.payload;
      const newitem = state.items.find(
        itemObj =>
          item.drink === itemObj.drink && item.option === itemObj.option
      );
      if (newitem) {
        newitem.quantity += 1;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        item["quantity"] = 1;
        return {
          ...state,
          items: state.items.concat([item])
        };
      }
    case REMOVE_ITEM:
      const itemDel = action.payload;
      const newitems = state.items.filter(itemobj => itemobj !== itemDel);
      return {
        ...state,
        items: newitems
      };
    case CHECKOUT:
      alert("Your order is being prepared right now");
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
