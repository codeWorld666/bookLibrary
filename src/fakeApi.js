const books=[
  {id:1,title:'book1',description:'description for book1'},
  {id:2,title:'book2',description:'description for book2'},
  {id:3,title:'book3',description:'description for book3'},
]


const DELAY=2000;
const fakeApi={
  fetchBooks:()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(books)
      },DELAY);

    })

  },
  addBook:()=>{
    return 'books'
  }
}

export default fakeApi;