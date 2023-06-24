import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material";
import Header from "./Components/header/Header";
import Home from "./Components/Home/Home";
import Cart from "./Components/cart/Cart";
import DetailView from "./Components/details/DetailView";
import Shipping from "./Components/shipping/Shipping";
import Context from "./context/Context";
import Footer from "./Components/Footer/Footer";

//=======================================function starts=======================================

function App() {
  return (
    <Context>
      <Router>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </Context>
  );
}

export default App;
