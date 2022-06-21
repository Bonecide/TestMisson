
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Autorization from './Pages/Autorization/Autorization';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Main from './Pages/Main/Main';

function App() {
  return (
   <Routes>
      <Route index element={<Autorization/>}/>
      <Route path='/forgotPassword' element={<ForgotPassword/>}/>
      <Route path='/main' element={<Main/>}/>
   </Routes>
  );
}

export default App;
