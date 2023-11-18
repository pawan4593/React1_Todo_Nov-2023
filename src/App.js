
import './App.css';
import Header from './MyComponents/Header';
import {Todo} from './MyComponents/Todo';
import {Footer} from './MyComponents/Footer';

function App() {
  let todos =[
    {
      sno : 1 ,
      title : "Go to Market",
      desc : "Buy groceries ,buy Veggies , buy milk "
    },
    {
      sno : 2 ,
      title : "Go to Mall",
      desc : "Buy Movie tickets , enjoy the AC , stalk greenary"
    },
    {
      sno : 3 ,
      title : "Office Work",
      desc : "Check mails , Check teams , yell at juniors and find unnecessary bugs "
    },
  ]
  return (
    <>
      <Header title="Todos List" searchBar={true}/>
      <Todo todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
