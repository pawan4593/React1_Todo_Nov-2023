
import './App.css';
import Header from './MyComponents/Header';
import {Todo} from './MyComponents/Todo';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import React , {useState , useEffect} from 'react' ;


function App() {
  let initTodo  ;
  if( localStorage.getItem("todos") === null ){
    initTodo = [] ;
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todoitem)=>{
    console.log("Deleting the todoitem : onDelete of " + todoitem) ;
    // Following two lines won't work in React
    // let index = todos.indexOf(todoitem)
    // todos.splice(index,1) ;
    
    setTodos(todos.filter((e)=>{
      return todoitem !== e ;
    }))
    localStorage.setItem("todos" , JSON.stringify(todos)) ;
  }
  
  const addTodo = (title , desc)=>{
    // console.log("Adding todo" , title , " " , desc) ;
    
    let sno ;
    let todoss= JSON.parse(localStorage.getItem("todos")) ;
    // console.log(todoss.length) ;
    //What if todos are empty
    if(todoss.length == 0){
      sno = 1 ;
    }else{
      sno = todoss[todoss.length - 1].sno + 1 ;
    }
    
    const myTodo = {
      sno : sno,
      title : title ,
      desc : desc 
    }

    //It is possible that following line may not finish execution completely and next line may execute , hence useEffect
    setTodos([...todos , myTodo]) ;
    // localStorage.setItem("todos" , JSON.stringify(todos)) ;

    
  }
  const [todos , setTodos]= useState(initTodo) ;

  //Moved useEffect from addTodos function here
  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos)) ;
  }, [todos])
  return (
    <>
      <Header title="Todos List" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todo todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
