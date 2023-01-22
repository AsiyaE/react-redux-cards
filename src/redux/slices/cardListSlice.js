import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filterStatus: false,
};

const cardListSlice = createSlice({
  name: 'cardList',
  initialState,
  reducers: {
    addItems(state, action) {
      state.items = action.payload.map((item, i) => ({
        id: i,
        imgUrl: item,
        liked: false,
      }));
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    setLikeStatus(state, action) {
      const id = action.payload;
      state.items[id].liked = !state.items[id].liked;
    },

    setFilterStatus(state) {
      state.filterStatus = !state.filterStatus;
    },
  },
});

export const { addItems, removeItem, setLikeStatus, setFilterStatus } = cardListSlice.actions;

export default cardListSlice.reducer;
