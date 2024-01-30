import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Gallery from "./containers/Gallery";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
