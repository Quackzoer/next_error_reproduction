import { useId } from "react";
import StyledRadio from "./StyledRadio";

interface Props {
  options: string[];
  name: string;
  selected: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioSelect({ options, name, selected, onChange }: Props) {
  return (
    <>
      <div className="mt-10">
        {options.map((option) => (
          <StyledRadio
            name={name}
            value={option}
            checked={option === selected}
            text={option}
            onChange={onChange}
            key={option}
          />
        ))}
      </div>
    </>
  );
}

export default RadioSelect;
