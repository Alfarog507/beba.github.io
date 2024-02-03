import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Segura?",
  "100% Segura?",
  "Me lo prometes?",
  "Segura que no quieres?",
  "No seas mala",
  "Aceptas?",
  "Beba, please :(",
  "No, no, no",
  "Porfa, te amo < 3",
  "Se que quieres",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://gifdb.com/images/high/animated-bear-kiss-enngnq0gm2r405bt.gif"
          />
          <div className="text">Love U Beba!</div>
        </>
      ) : (
        <>
          <img
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="bear"
          />

          <div>Will you be my valentine?</div>

          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Si
            </button>
            <button className="noButton" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
