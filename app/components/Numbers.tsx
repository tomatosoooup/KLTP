import { useId } from "react";

interface NumbersProps {
  containerClass: string;
  spanClass: string;
  nums: number[];
}

export const Number = ({ children }) => {
  const id = useId();
  return <span key={id}>{children}</span>;
};

const Numbers: React.FC<NumbersProps> = ({
  containerClass,
  spanClass,
  nums,
}) => {
  return (
    <div
      className={`
    absolute
    hidden
    lg:flex
    items-center 
    justify-center
    flex-col 
    gap-5 
    text-[#D3D3D3]
    ${containerClass}`}
    >
      {nums.map((num, index) => (
        <span className={spanClass} key={index}>
          <Number key={index}>{num}</Number>
        </span>
      ))}
    </div>
  );
};

export default Numbers;
