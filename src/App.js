import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Router } from 'react-router-dom';
import { ViewData } from './components/ViewData';
import { AddData } from './components/AddData';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path='/' element={<ViewData/>}/>
        <Route path='/add' element={<AddData/>}/>
      </Router>
      
    </div>
  );
}

export default App;
