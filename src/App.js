import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import Header from './components/Header'
import {BrowserRouter , Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Add/>} />
      <Route path='/edit' element={<Edit/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
