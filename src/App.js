import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("Lets go play");
  const [firstImg, setFirstImg] = useState(process.env.PUBLIC_URL + "dice6.png");
  const [secondImg, setSecondImg] = useState(process.env.PUBLIC_URL + "dice6.png");

  function playGame() {
    //Random images 1
    const randomNumber1 = Math.floor(Math.random() * 6) + 1; //Визначаємо рандомне число від 1 до 6
    const randomSerch1 = process.env.PUBLIC_URL +"dice" + randomNumber1 + ".png"; // Задаємо шлях
    setFirstImg(randomSerch1);

    // Random images 2
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const randomSerch2 =process.env.PUBLIC_URL + "dice" + randomNumber2 + ".png";
    setSecondImg(randomSerch2);

    //Answer to h1
    if (randomNumber1 > randomNumber2) {
      setResult("Player 1 Wins!");
    } else if (randomNumber2 > randomNumber1) {
      setResult("Player 2 Wins!");
    } else {
      setResult("Draw!");
    }
  }

  const yearCounter = new Date();
  const year = yearCounter.getFullYear();

  function resetGame() {
    setResult("Push Play");
    setFirstImg(process.env.PUBLIC_URL + "dice6.png");
    setSecondImg(process.env.PUBLIC_URL + "dice6.png");
  }

  return (
    <div>
      <div class="container">
        <div>
          <h1>{result}</h1>
          <button onClick={playGame}>Play</button>
          <button onClick={resetGame}>Reset</button>
        </div>
        <div class="dicee">
          <p>Player 1</p>
          <img src={firstImg} alt="Cubik" class="img1" />
        </div>
        <div class="dicee">
          <p>Player 2</p>
          <img src={secondImg} alt="Cubik" class="img2" />
        </div>
      </div>
      <footer>© {year} All rights reserved.</footer>
    </div>
  );
}

export default App;