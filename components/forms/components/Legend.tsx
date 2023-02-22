interface Props {
  text: string;
}

function Legend({ text }: Props) {
  return <legend className="text-xl text-amber-500">{text}</legend>;
}

export default Legend;
