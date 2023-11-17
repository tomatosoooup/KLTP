import { v4 as uuidv4 } from "uuid";

interface OprionProps {
  val1: string;
  val2: string;
  val3: string;
  onChoose?: (type: string, name: string, cur: string) => void;
}

const Option: React.FC<OprionProps> = ({ val1, val2, val3, onChoose }) => {
  const handleClick = () => {
    onChoose(val1, val2, val3);
  };

  return (
    <li
      key={uuidv4()}
      className={`cursor-pointer flex justify-between pl-4 pr-7 border border-white/10 font-extralight py-1 items-center`}
      onClick={handleClick}
    >
      <span className="pt-1">{val1}</span>
      <span className="pt-1">{val2}</span>
    </li>
  );
};

export default Option;
