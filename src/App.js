import './App.css';
import Header from './components/Header';
import KisanDetail from './components/KisanDetail';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import AddKisan from './components/AddKisan';
import Verified from './components/Verified';
function App() {
  return (
   <>
   <Router>
   <Header></Header>
   <Routes>
     <Route path='/' element={<KisanDetail></KisanDetail>}></Route>
     <Route path='/AddKisan' element={<AddKisan></AddKisan>}></Route>
     <Route path='/verified' element={<Verified></Verified>}></Route>
   </Routes>
   </Router>
   </>
  );
}

export default App;
