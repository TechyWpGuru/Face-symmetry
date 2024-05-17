import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/navBar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
