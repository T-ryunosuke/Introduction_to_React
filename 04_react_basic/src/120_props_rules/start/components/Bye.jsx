const Bye = (props) => {
  const desc = Reflect.getOwnPropertyDescriptor(props, "name");
  console.log(desc);
  return (
    <div>
      <h3>Bye {props.name}</h3>
    </div>
  );
};

export default Bye;
