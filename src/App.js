import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <Todos />
      <Posts />
    </div>
  );
}

export default App;
