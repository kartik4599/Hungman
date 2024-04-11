import one from "./assets/hungman_steps/1.png";
import two from "./assets/hungman_steps/2.png";
import three from "./assets/hungman_steps/3.png";
import four from "./assets/hungman_steps/4.png";
import five from "./assets/hungman_steps/5.png";
import six from "./assets/hungman_steps/6.png";
import winner from "./assets/winner.png";
import start from "./assets/undraw.png";

const imageArr = [one, two, three, four, five, six];

const StageImage: React.FC<{ count: number; win: boolean }> = ({
  count,
  win,
}) => {
  return (
    <div>
      {win ? (
        <img height={150} src={winner} />
      ) : count > 0 ? (
        <img height={150} src={imageArr[count - 1]} />
      ) : (
        <img height={200} src={start} />
      )}
      <br />
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        {win ? (
          <span style={{ color: "green" }}>You Saved Him</span>
        ) : count === 6 ? (
          <span style={{ color: "red" }}>You Killed Him</span>
        ) : (
          <span>{6 - count} Chances Remaining</span>
        )}
      </div>
    </div>
  );
};

export default StageImage;
