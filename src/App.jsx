import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
