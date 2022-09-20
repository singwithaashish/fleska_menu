import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  allItems : [],
  allItemsJson : {},
}

export const stateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItems: (state, action) => {
        state.allItems = [...state.allItems, action.payload]
        console.log(state.allItems);
        if(state.allItemsJson[action.payload.id] === undefined){
            state.allItemsJson[action.payload.id] = action.payload.id
        }
        state.allItemsJson[action.payload.id] = action.payload.id
    },
    removeItems: (state, action) => {
        state.allItems = state.allItems.filter(item => item.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItems, removeItems } = stateSlice.actions

export default stateSlice.reducer