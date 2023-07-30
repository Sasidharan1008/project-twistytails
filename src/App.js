import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import DayCare from "./Pages/DayCare/DayCare";
import Footer from "./Components/Footer";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
       <Routes >
        <Route path="/project-twistytails/" exact element={<Home />} />
        <Route path="/daycare" exact element={<DayCare />} />
       </Routes>
      <Footer />
    </Router>
  );
}

export default App;
