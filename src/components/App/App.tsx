import "./App.css";

import Card from "../Card";
import AppBar from "../AppBar";

function App() {
  const CardList = [];
  for (let i: number = 0; i < 10; i++) {
    CardList.push(<Card />)
  }

  return (
    <>
      <AppBar />
      <div className="cardContainer">{CardList}</div>
    </>
  )
}

export default App;
