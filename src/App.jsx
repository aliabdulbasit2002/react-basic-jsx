import "./App.css";
import ronaldo from "./assets/ronaldo.jfif";
import barce from "./assets/barca.png";

const App = () => {
  return (
    <div className="App">
      <div>
        <h4>We Are Barcelona</h4>
        <p>
          Futbol Club Barcelona, commonly referred to as Barcelona and
          colloquially known as Barça, is a professional football club based in
          Barcelona, Catalonia, Spain, that competes in La Liga, the top flight
          of Spanish football.
        </p>
      </div>
      <div>
        <img src={ronaldo} alt="" />
        <img src={barce} alt="" style={{ marginLeft: "100px" }} />
        <h4>C.Ronaldo</h4>
        <p>I wished c.ronaldo would have played for Barcelona.</p>
      </div>
    </div>
  );
};

export default App;
