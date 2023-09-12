type GreetProps = {
  name?: string;
};

const Greet = (props: GreetProps) => {
  return (
    <>
      <div>Hello {props.name}</div>
      <p>Boy</p>
    </>
  );
};

export default Greet;
