import './App.css';
import {Routes, Route} from "react-router-dom"
import {Home} from "./screens/Home/index.js"

function App() {
  return (
    <div className="App">
      <img className="background-img" src="https://images6.alphacoders.com/876/thumb-1920-876591.jpg" alt="" />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
