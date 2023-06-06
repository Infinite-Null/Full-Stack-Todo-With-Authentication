
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Screens/LoginPage';
import MainPage from './Screens/MianTodo';
import Signup from './Screens/Signup';
import UserState from './Context/User/UserState';
import { useContext } from 'react';
import UserContext from './Context/User/UserContext';
import TodoState from './Context/Todo/TodoState';
function App() {
  var k=useContext(UserContext)
  return <BrowserRouter>
  <Routes>
     {k.userData.login ? <Route path='/' element={<TodoState> <MainPage /> </TodoState>}/>:<Route path='/' element={<LoginPage />}/>}
      {!k.userData.login&&<Route path="/login" element={<LoginPage />}/>}
      {!k.userData.login&&<Route path="/signup" element={<Signup />}/>}
  </Routes>
</BrowserRouter>
}

export default App;
{/* <MainPage/> */}
{/* <LoginPage/> */}
{/* <Signup/> */}