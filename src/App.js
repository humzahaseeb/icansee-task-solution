import logo from "./imgs/logo.png";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="icansee logo" />
      </div>
      <Card />
    </>
  );
}

export default App;
