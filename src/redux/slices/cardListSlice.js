import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: []
}

const cardListSlice = createSlice({
	name: 'cardList',
	initialState,
	reducers: {
	  addItems(state, action) { //array of imgUrl
		state.items = action.payload.map((item,i) => {
			return {
				id: i,
				imgUrl: item,
				liked: false,
			}
		})
	  },

	  removeItem(state, action) { //id
		state.items = state.items.filter(obj => obj.id !== action.payload);
	  },

	  setLikeStatus(state, action) { //id
		const id = action.payload;
		state.items[id].liked = !state.items[id].liked;
	  }
	},
  });
  
export const { addItems, removeItem, setLikeStatus } = cardListSlice.actions

export default cardListSlice.reducer
