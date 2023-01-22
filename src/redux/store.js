import { configureStore } from '@reduxjs/toolkit'
import cardListReducer from './slices/cardListSlice'

export const store = configureStore({
  reducer: {
	  cardList: cardListReducer,
  },
})