// Context
import { useContext } from "react";
import statusContext from "../Context/statusContext";

// SVG Import
import { ReactComponent as HangoutsSVG } from "../Styles/svg/hangouts.svg";

const Hangout = () => {
  const { works, todos, setHangout, setButton } = useContext(statusContext);

  const onClick = () => {
    const workDone = works.map((work) => work.name.toString() + "\n");
    const toDo = todos.map((todo) => todo.name.toString() + "\n");

    const timeString = new Date()
      .toLocaleTimeString({ hour12: true })
      .slice(0, 5);

    const string = `Clock Off - ${timeString} P.M.\n\nWork Done:\n${workDone
      .toString()
      .trim()
      .replaceAll(",", "")}\n\nTo Do:\n${toDo
      .toString()
      .trim()
      .replaceAll(",", "")}`;

    setHangout(string);
    setButton("hangout");
    navigator.clipboard.writeText(string);
  };

  return (
    <>
      <div className="button__copy" onClick={onClick}>
        <HangoutsSVG className="svgImage" />
        <p>Hangouts</p>
      </div>
    </>
  );
};

export default Hangout;
