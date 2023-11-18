
import './App.css';
import Header from './MyComponents/Header';
import {Todo} from './MyComponents/Todo';
import {Footer} from './MyComponents/Footer';

function App() {
  
  return (
    <>
      <Header title="Todos List" searchBar={true}/>
      <Todo/>
      <Footer/>
    </>
  );
}

export default App;
