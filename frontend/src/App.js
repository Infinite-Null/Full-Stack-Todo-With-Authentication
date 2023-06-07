
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Screens/LoginPage';
import MainPage from './Screens/MianTodo';
import Signup from './Screens/Signup';
import { useContext } from 'react';
import UserContext from './Context/User/UserContext';
import TodoState from './Context/Todo/TodoState';
function App() {
  var k=useContext(UserContext)
  function rou(){
    if(k.userData.login==true||k.userData.login=='true'){
      return <Route path='/' element={<TodoState> <MainPage /> </TodoState>}/>
    }else{
      return <Route path='/' element={<LoginPage />}/>
    }
  }
  return <BrowserRouter>
  <Routes>
     {rou()}
      {(k.userData.login!=true||k.userData.login!="true")&&<Route path="/login" element={<LoginPage />}/>}
      {(k.userData.login!=true||k.userData.login!="true")&&<Route path="/signup" element={<Signup />}/>}
  </Routes>
</BrowserRouter>
}

export default App;
