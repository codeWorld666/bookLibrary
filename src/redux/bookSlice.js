import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import fakeApi from '../fakeApi';

// async thunk action
export const fetchBooks=createAsyncThunk('books/fetchBooks',async ()=>{
  try {
    const data=await fakeApi.fetchBooks();
    console.log('data',data);
    return data;
  } catch (error) {
    console.error('Failed to fetch books',error);
    throw error;
  }
});


const bookSlice=createSlice({
  name:'books',
  initialState:[],
  reducers:{
    addBook:(state,action)=>{
      state.push({id:Date.now(),...action.payload})
    },
    deleteBook:(state,action)=>{
      return state.filter((book)=>book.id !== action.payload.id)
    },
  },
  extraReducers:(builder)=>{
    // fetchBooks成功，走fulfilled;失败，走rejected
    // 如果extraReducer中的方法与reducer中的方法名称一致，会覆盖reducer中的方法
    builder
      .addCase(fetchBooks.fulfilled,(state,action)=>{
        return [...action.payload]

      })
      .addCase(fetchBooks.rejected,(state,action)=>{
        console.error('Failed to fetch books',action.error);
      })

  }
})
export const {addBook,deleteBook}=bookSlice.actions;
export default bookSlice.reducer;

