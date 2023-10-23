import {configureStore} from '@reduxjs/toolkit';
import bookReducer from './bookSlice';


const store=configureStore({
  // 想要拿bookReducer中的state，在这里books.state
  reducer:{
    books:bookReducer
  }
})


export default store;