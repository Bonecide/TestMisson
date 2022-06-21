import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Autorization from './Pages/Autorization/Autorization';

function App() {
  return (
   <Routes>
      <Route index element={<Autorization/>}/>
   </Routes>
  );
}

export default App;
