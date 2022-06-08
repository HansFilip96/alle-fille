import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <Card />
    </div>
  );
}

export default App;
