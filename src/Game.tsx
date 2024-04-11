import AlphabetComponent from "./AlphabetComponent";
import StageImage from "./StageImage";
import { useState, useEffect } from "react";

const sampleWords = [
  "come",
  "bell",
  "bear",
  "play",
  "sing",
  "bird",
  "bean",
  "game",
  "rice",
  "four",
  "five",
  "tree",
  "keep",
  "dark",
  "moon",
  "cool",
  "dealt",
  "stroy",
  "rebel",
  "might",
  "truck",
  "sweet",
  "night",
];

const Game: React.FC<{ startHandler: () => void }> = ({ startHandler }) => {
  const [correctWords, setCorrectWords] = useState<string[]>([]);
  const [wrongWords, setWrongWords] = useState<string[]>([]);
  const [win, setWin] = useState<boolean>(false);
  const [string, setString] = useState("");

  const wordSelectHandler = (word: string) => {
    if (string.split("").includes(word)) {
      setCorrectWords((pre) => [...pre, word]);
    } else {
      setWrongWords((pre) => [...pre, word]);
    }
  };

  useEffect(() => {
    let check = true;
    if (string) {
      string.split("").forEach((word) => {
        if (!correctWords.includes(word)) check = false;
      });
      if (check) setWin(true);
    }
  }, [correctWords, string]);

  useEffect(() => {
    const number = Math.floor(Math.random() * sampleWords.length - 1);
    if (number >= 0) setString(sampleWords[number]);
  }, [sampleWords]);

  useEffect(() => {
    if (win) {
      setTimeout(() => {
        startHandler();
        setWin(false);
      }, 3000);
    }
  }, [win]);

  useEffect(() => {
    if (wrongWords.length === 6) {
      setTimeout(() => {
        startHandler();
        setWin(false);
      }, 3000);
    }
  }, [wrongWords]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "70vw",
        alignItems: "center",
      }}
    >
      <StageImage count={wrongWords.length} win={win} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: wrongWords.length < 6 ? "black" : "red",
            }}
          >
            {wrongWords.length < 6
              ? string.split("").map((word) => {
                  if (correctWords.includes(word)) return `${word} `;
                  return "_ ";
                })
              : string.split("").map((word) => `${word} `)}
          </div>
        </div>
        <AlphabetComponent
          correctWords={correctWords}
          wrongWords={wrongWords}
          wordSelectHandler={wordSelectHandler}
        />
      </div>
    </div>
  );
};

export default Game;
