import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import UserHome from "./components/userHome/UserHome";
import UserSignup from "./components/userSignUp/UserSignup";
// import AllStudents from "./components/teacherDash/Allstudents";
// import AddStudent from "./components/teacherDash/AddStudent";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userHome" element={<UserHome />} />

          {/* <Route path="/all" element={<AllStudents/>} />
<Route path="/add" element={<AddStudent/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
