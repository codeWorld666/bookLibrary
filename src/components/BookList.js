import React,{useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";
import {deleteBook, fetchBooks} from "../redux/bookSlice"

// 初次加载fetch books

const BookList=()=>{
  const books=useSelector(state=>state.books);
  console.log('books',books);
  const dispatch=useDispatch();
  useEffect(()=>{
    // 用useDispatch来dispatch action
    dispatch(fetchBooks())
    // 确保有dispatch情况下再次执行
  },[dispatch]);
  return (<div>
    <h3>Books</h3>
    <ul>
      {books && books.length>0 
      ?
      <ul>
        {books.map((book,i)=>(
          <li key={`${i}-${book.id}`} >
            {book.title}-{book.description}
            <button onClick={()=>dispatch(deleteBook({id:book.id}))}>Delete</button>
          </li>
        ))}
      </ul>
      :
      null
      }
    </ul>
  </div>)
}

export default BookList;