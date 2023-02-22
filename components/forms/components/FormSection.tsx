interface Props {
  children: React.ReactNode;
}

function FormSection({ children }: Props) {
  return <div className="my-10">{children}</div>;
}

export default FormSection;
