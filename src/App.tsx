import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <div>
        <div>
          <img src="https://cdn.dribbble.com/userupload/4917945/file/original-78179204be3fc54cc9602dc4ee95d709.gif" alt="" />
        </div>
        <Todo />
      </div>
      <p>shatrukumar47@gmail.com</p>
    </div>
  );
}

export default App;
