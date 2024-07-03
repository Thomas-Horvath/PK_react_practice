import './App.css';
import  blogs from "./data/constants.js";
import Blog from './components/Blog/Blog.jsx';

function App() {
  return (
    <div className="App">
      <h1>Egy random szám: {Math.round(Math.random() * 10)}</h1>
      <Blog blogs={blogs} />
    </div>
  );
}

export default App;
