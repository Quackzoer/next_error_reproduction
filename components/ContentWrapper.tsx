interface Props {
  children: React.ReactNode;
}

function ContentWrapper(props: Props) {
  return (
    <div className="w-full max-w-screen-2xl box-border px-10 ">
      {props.children}
    </div>
  );
}

export default ContentWrapper;
