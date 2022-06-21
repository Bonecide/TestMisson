
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import AutorizationPage from './Pages/AutorizationPage/AutorizationPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/ForgotPasswordPage';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
   <Routes>
      <Route index element={<AutorizationPage/>}/>
      <Route path='/forgotPassword' element={<ForgotPasswordPage/>}/>
      <Route path='/main' element={<MainPage/>}/>
   </Routes>
  );
}

export default App;
