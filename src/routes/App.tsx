import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/auth/AuthContext";
import Login from "../pages/Login";
import { DashBoard } from "../pages/DashBoard";

function App() {
    return (
        <BrowserRouter> {/* <BrowserRouter> debe envolver todo */}
            <AuthProvider> {/* Ahora `AuthProvider` está dentro del Router */}
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
