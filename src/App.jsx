import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ScrollTop from "./components/ScrollTop";
import ScrollTopArrow from "./components/ScrollTopArrow";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Toaster/>
      <Header />
      <ScrollTop/>
      <ScrollTopArrow/>
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
