
import './App.css';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    <Router>

      
      <Header/>
      <Routes>
       
      {/* <Route path='/add' component={AddStudent} exact /> */}
      <Route path='/add' element={<AddStudent/>} />
      </Routes>
      
      
    
    </Router>
   
  );
}

export default App;
