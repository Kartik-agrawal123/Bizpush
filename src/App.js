import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PopularProduct from "./components/PopularProduct";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-customRed to-customBlue">
        <NavBar />
        <Hero />
        <PopularProduct/>
      </div>
    </>
  );
}

export default App;
