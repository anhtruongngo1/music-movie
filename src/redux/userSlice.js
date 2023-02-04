import { createSlice  , createAsyncThunk} from '@reduxjs/toolkit'
import { deleteToCart, getToCart, getUserDetail } from '../container/service/userService' ;
import axios from 'axios';

const initialState = {
  userInfor: null,
  accessToken: '',
  loading : false ,
  CartFilm :[]
}

export const fetchUser = createAsyncThunk('users/fetchByIdStatus', async(id ,{
  rejectWithValue
})=>{

    try {
     const res =  await getToCart(id)
     return res.data ;
      
    } catch (error) {
      rejectWithValue(error.response.data)
      
    }

})
export const fetchUserDetails = createAsyncThunk('users/fetchDetailsUser', async(id ,{
  rejectWithValue
})=>{

    try {
     const res =  await getUserDetail(id)
     return res.data ;
      
    } catch (error) {
      rejectWithValue(error.response.data)
      
    }

})

export const userSlice = createSlice({
  name: 'counter',
  initialState,
 
  reducers: {
    saveInforUser: (state , action) => {
      state.userInfor = action.payload.userInfor         
    },
    updateInforUser: (state , action) => {
      state.userInfor = action.payload.userInfor   
            
    },
    saveAccessToken: (state , action) => {
      state.accessToken = action.payload.accessToken 
      localStorage.setItem("user",action.payload.accessToken )
    },
    logOutUser: (state) => {
      state.userInfor = null; 
      state.accessToken = "";
      localStorage.clear()
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers :{
    [fetchUser.pending] : (state , {payload}) => {
      state.loading =  true ;

    },
    [fetchUser.fulfilled] : (state , {payload}) => {
      state.loading =  false ;
      state.CartFilm = payload

    },
    [fetchUser.rejected] : (state , {payload}) => {
      state.loading =  false ;

    },
    [fetchUserDetails.pending] : (state , {payload}) => {
      state.loading =  true ;

    },
    [fetchUserDetails.fulfilled] : (state , {payload}) => {
      state.loading =  false ;
      state.userInfor = payload

    },
    [fetchUserDetails.rejected] : (state , {payload}) => {
      state.loading =  false ;

    }

  }
})

// Action creators are generated for each case reducer function
export const { saveInforUser, saveAccessToken 
  , logOutUser, updateInforUser } = userSlice.actions

export default userSlice.reducer