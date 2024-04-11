const SingleAlphabet: React.FC<{
  word: string;
  status: string;
  handler: () => void;
}> = ({ word, status, handler }) => {
  return (
    <div
      onClick={handler}
      style={{
        border:
          status === "ok"
            ? "1px solid green"
            : status === "not"
            ? "1px solid red"
            : "1px solid grey",
        borderRadius: "50%",
        padding: "5px 12px",
        textAlign: "center",
        margin: "10px 5px",
        cursor: "pointer",
      }}
    >
      {word}
    </div>
  );
};

const AlphabetComponent: React.FC<{
  correctWords: string[];
  wrongWords: string[];
  wordSelectHandler: (word: string) => void;
}> = ({ wordSelectHandler, correctWords, wrongWords }) => {
  const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "50%" }}>
      {alphabetArray.map((word) => (
        <SingleAlphabet
          key={word}
          word={word}
          status={
            correctWords.includes(word)
              ? "ok"
              : wrongWords.includes(word)
              ? "not"
              : ""
          }
          handler={wordSelectHandler.bind(null, word)}
        />
      ))}
    </div>
  );
};

export default AlphabetComponent;
