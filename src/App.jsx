import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/Navbar/NavBar";
import Footer from "./Component/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
