import "./App.css";
import Cart from "./components/Cart";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import PopularProduct from "./components/PopularProduct";

function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-customRed to-customBlue">
        <NavBar />
        <Hero />
        <PopularProduct />
      </div>
      {/* <Cart/> */}
    </>
  );
}

export default App;
