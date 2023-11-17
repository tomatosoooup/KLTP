import Option from "./Option";
import classes from "../buttons/Button.module.css";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type TValue = {
  type: string;
  name: string;
  cur: string;
};

const Select = ({ options, initialValues, onChoose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [values, setValues] = useState<TValue | null>(null);

  const handleOptionChoose = (type: string, name: string, cur: string) => {
    setValues({ type, name, cur });
    setIsOpen(false);
    onChoose(cur, type);
  };

  return (
    <div className="relative text-white font-bold ">
      <div
        className={`rounded-lg p-2 flex justify-between pl-5 pr-8 cursor-pointer ${classes.btn}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="pt-1">{values ? values.type : initialValues[0]}</span>
        <span className="pt-1">{values ? values.name : initialValues[1]}</span>
        <Image
          className="absolute right-3 top-5"
          width={10}
          height={10}
          src={"./images/triangle.svg"}
          alt="triangle"
        />
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute left-0 top-11 w-full bg-[#181818] flex flex-col overflow-y-auto max-h-[155px] lg:max-h-[200px] select-dropdown font-bold z-10`}
        >
          {options.map((opt: any) => (
            <Option
              val1={opt.type}
              val2={opt.name}
              val3={opt.cur}
              onChoose={handleOptionChoose}
              key={uuidv4()}
            ></Option>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
