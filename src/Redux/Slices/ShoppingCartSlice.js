const { createSlice } = require("@reduxjs/toolkit");

const Initial_State = {
  items: [],
  totalCount: 0,
  totalAmount: 0,
  discountProducts: 0,
};
const refreshState = (state) => {
  state.totalCount = 0;
  state.totalAmount = 0;
  state.discountProducts = 0;
  state.items.map((item) => {
    state.totalCount += item.count;
    state.totalAmount +=
      item.priceWithDiscount !== 0
        ? item.priceWithDiscount * item.count
        : item.price * item.count;

    state.discountProducts +=
      (item.price - item.priceWithDiscount) * item.count;
  });
  return state;
};
const ShoppingCartSlice = createSlice({
  name: "ShoppingCartSlice",
  initialState: Initial_State,
  reducers: {
    addItem: (state, action) => {
      state.items.push({ ...action.payload, count: 1 });
      return refreshState(state);
    },
    increaceItem: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count++;
        }
      });
      return refreshState(state);
    },
    decreaseItem: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.count--;
        }
      });
      return refreshState(state);
    },
    removeItem: (state, action) => {
      state = {
        items: state.items.filter((item) => {
          return item.id !== action.payload;
        }),
      };
      return refreshState(state);
    },
    removeAll: (state, action) => {
      state.items = [];
      state.totalCount=0
    },
  },
});
export const { addItem, increaceItem, decreaseItem, removeItem, removeAll } =
  ShoppingCartSlice.actions;
export default ShoppingCartSlice.reducer;
