import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import ShowImage from "./pages/ShowImage.jsx";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/show-image" element={<ShowImage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
