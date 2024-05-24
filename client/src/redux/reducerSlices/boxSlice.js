import { clearAllListeners, createSlice } from '@reduxjs/toolkit'

const initialState = { 
    backgroundColor: 'red', 
    width: 50,
    height: 50,
    borderRadius: '',
}

const boxSlice = createSlice({
  name: 'box',
  initialState: initialState,
  reducers: {
    changeHeight(state) {
      state.height=state.height+5
    },
    changeWidth(state) {
      state.width=state.width+5
    },
    changecircle(state) {
      if( state.borderRadius == 'rounded-full'){
        state.borderRadius=''
      }
      else{
      state.borderRadius='rounded-full'}
    },
    changecolor(state,color){
      state.backgroundColor=color.payload
    }
  },
})

export const { changeHeight, changeWidth ,changecircle,changecolor} = boxSlice.actions
export default boxSlice.reducer