import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importing pages and components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import BookDetail from "./pages/BookDetail";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="hero">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="/books/:id" element={<BookDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
