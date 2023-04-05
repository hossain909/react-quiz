import "../styles/App.css";
import Layout from "./Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Result from "./pages/Result";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<PublicOutlet />}>
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>
          {/* private routes */}
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/result/:id" element={<Result />} />
          </Route>
        </Routes>
      </Layout>
    </AuthProvider>
  );
}
export default App;
