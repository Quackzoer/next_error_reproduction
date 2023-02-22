import StyledRange from "./StyledRange";

interface Props {
  value: number;
  min: number;
  max: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  minLabel?: string;
  maxLabel?: string;
}

function RangeSelect({ value, min, max, setValue, minLabel, maxLabel }: Props) {
  return (
    <>
      {minLabel && maxLabel && (
        <div className="flex justify-between mt-5">
          <span>{minLabel}</span>
          <span>{maxLabel}</span>
        </div>
      )}
      <div className="mt-5 mx-[14px]">
        <StyledRange value={value} setValue={setValue} min={min} max={max} />
      </div>
    </>
  );
}

export default RangeSelect;
