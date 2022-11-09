
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AddStudent from './components/AddStudent';
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
</Routes>



</Router>
    </div>
  );
}

export default App;
