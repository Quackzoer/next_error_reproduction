import { useId } from "react";

interface Props {
  name: string;
  id?: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
}

const StyledRadio = ({ name, value, onChange, checked, text }: Props) => {
  const id = useId();
  return (
    <div className="w-full my-5 first-of-type:mt-0 last-of-type:mb-0 h-[28px]">
      <label htmlFor={id} className="inline-flex items-center cursor-pointer">
        <input
          required={true}
          className="radio-input"
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span className="flex-shrink-0 mr-2 custom-radio" />
        {text}
      </label>
    </div>
  );
};

export default StyledRadio;
