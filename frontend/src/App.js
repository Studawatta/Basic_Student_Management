
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./components/home/Home";



function App() {
  return (
    <div className="App">
      
      <Router>

      
{/* <Header/> */}

<Routes>
 

<Route path='/' element={<Home/>} />

{/* <Route path="/" element={<Allstudents/>} /> */}
</Routes>



</Router>
    </div>
  );
}

export default App;
