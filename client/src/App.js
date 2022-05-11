import { Routes, Route } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Reports from "./pages/Reports";
import Withdraw from "./pages/Withdraw";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/report" element={<Reports />} />
      </Routes>
    </>
  );
}

export default App;
