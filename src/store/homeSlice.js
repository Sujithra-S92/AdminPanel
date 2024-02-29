import { createSlice } from '@reduxjs/toolkit'



export const homeSlice = createSlice({
  name: 'home',
  initialState:{
    url:{},
    genres:{}, 
    user:null,
   // selectUser:null
    
  },
  reducers: {
    login:(state, action)=>{
      state.user= action.payload
      //console.log(state.user);
      //state.selectUser=action.payload;
      //console.log(selectUser);
    },
    logout: (state)=>{
      state.user= null;
    },
    getApiConfiguration:(state,action)=>{
      state.url= action.payload;
      //console.log(state.url)
    },
    getGenres:(state,action)=>{
      state.genres= action.payload
    }
    
  },
});

// Action creators are generated for each case reducer function
export const { login , logout ,getApiConfiguration, getGenres} = homeSlice.actions;
 export const selectUser = (state)=>state.homeSlice.email;
 console.log(selectUser)

export default homeSlice.reducer;