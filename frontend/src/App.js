
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AddStudent from './components/AddStudent';
import Allstudents from "./components/Allstudents";
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      
      <Router>

      
<Header/>

<Routes>
 
{/* <Route path='/add' component={AddStudent} exact /> */}
<Route path='/add' element={<AddStudent/>} />
{/* <Route path='/' element={<AllStudents/>} /> */}
<Route path="/" element={<Allstudents/>} />
</Routes>



</Router>
    </div>
  );
}

export default App;
