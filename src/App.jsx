import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/Navbar/NavBar";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
