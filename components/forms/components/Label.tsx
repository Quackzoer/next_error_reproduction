interface Props {
  text: string;
  htmlFor: string;
}

function Label({ text, htmlFor }: Props) {
  return (
    <label className="text-xl text-amber-500" htmlFor={htmlFor}>
      {text}
    </label>
  );
}

export default Label;
