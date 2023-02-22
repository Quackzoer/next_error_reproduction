import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const handleStyle = {
  width: 28,
  height: 28,
  marginLeft: 0,
  marginTop: -14,
  backgroundColor: "#F59E0B",
  opacity: 1,
  border: "none",
  boxShadow: "none",
};
const trackStyle = {
  backgroundColor: "#F59E0B",
  height: 2,
};
const railStyle = {
  backgroundColor: "white",
  height: 2,
  marginY: 13,
};
interface Props {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
}

function StyledRange({ value, setValue, min, max }: Props) {
  return (
    <div>
      <Slider
        value={value}
        handleStyle={handleStyle}
        trackStyle={trackStyle}
        railStyle={railStyle}
        onChange={(e) => {
          setValue(e as number);
        }}
        min={min}
        max={max}
      />
    </div>
  );
}

export default StyledRange;
