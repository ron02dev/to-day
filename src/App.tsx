import LeftBox from "./components/LeftBox";
import RightBox from "./components/RightBox";
import "./styles/App.css";

function App() {
  return (
    <>
      <header className="header-parcont">
        <h1>To-Day</h1>
      </header>
      <div className="app-parcont">
        <LeftBox />
        <RightBox />
      </div>
    </>
  );
}

export default App;
