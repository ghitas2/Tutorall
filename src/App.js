import './App.css';
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login'; // Ensure this path is correct
import Menu from './components/Menu';
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Menu></Menu>
        {/* Define your routes here, outside of the buttons */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path ='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
           