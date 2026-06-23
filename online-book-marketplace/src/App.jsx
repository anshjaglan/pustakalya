import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import Wishlist from "./pages/Wishlist";import Recommendations from "./pages/Recommendations";
import AIAssistant from "./pages/AIAssistant";
import Seller from "./pages/Seller";

function App() {
  return (
    
    <BrowserRouter>
    

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/recommendations" element={<Recommendations />}/>
      <Route path="/seller" element={<Seller />}/>
      <Route path="/assistant"  element={<AIAssistant />}/>
      </Routes>
      <ChatBot />
        <Footer />

    </BrowserRouter>
  );
}

export default App;