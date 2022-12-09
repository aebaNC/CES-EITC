import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import MainP from "./pages/navigation";
import Order from "./pages/order"
import Admin from "./pages/adminPanel.tsx"
import React from 'react';
import useToken from './utils/userToken'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";




export default function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken}></Login>
  }

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Home" element={<Home />} />
      </Routes>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
          <Route path="/orders" element={<Order />} />
      </Routes>
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);