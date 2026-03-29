import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePaste from "./pages/CreatePaste";
import ViewPaste from "./pages/ViewPaste";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CreatePaste />} />
        <Route path="/view/:id" element={<ViewPaste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;