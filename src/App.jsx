import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <AppRoutes />
      </Router>
    </>
  )
}

export default App
