import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PatientDashboard from "./pages/PatientDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="clinics" />}></Route>
          <Route path="/clinics" element={<PatientDashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;