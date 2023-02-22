import Select from "react-select";

interface Props {
  options: string[];
  selected: string | null;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
  placeholder: string;
}

function StyledSelect({ options, selected, setSelected, placeholder }: Props) {
  return (
    <div className="select">
      <Select
        placeholder={placeholder}
        unstyled={true}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "#334155",
            padding: "1rem",
            cursor: "pointer",
          }),
          option: (provided, state) => ({
            ...provided,
            padding: "1rem",
            backgroundColor: state.isFocused
              ? "#64748B"
              : state.isSelected
              ? "#334155"
              : "#475569",
          }),
        }}
        value={selected ? { value: selected, label: selected } : null}
        onChange={(option) => {
          setSelected(option ? option.value : null);
        }}
        options={options.map((option) => ({ value: option, label: option }))}
        components={{
          NoOptionsMessage: () => null,
        }}
      />
    </div>
  );
}

export default StyledSelect;
