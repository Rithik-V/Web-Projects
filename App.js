
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/createpost';
import Login from './pages/Login';
import {useState} from 'react';
import {signOut} from 'firebase/auth'
import { auth } from "./firebase-config";
import {useEffect} from 'react'
function App() {
  const [isAuth,setIsAuth]=useState(false);
   
  //const navigate = useNavigate();
  const signUserOut = () =>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname='/login'
    })
  }
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        
        {!isAuth ?(<Link to="/login">Login</Link>):
        (<>
        <Link to="/createpost">Createpost</Link>
        <button onClick={signUserOut}>Log Out</button>
        </>)}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>}/>
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
