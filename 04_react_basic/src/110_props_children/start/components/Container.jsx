import "./Container.css";

const Container = ({ title, children, two, first, second }) => {
  return (
    <div className="container">
      <h3>{title}</h3>
      {children}
      {two}
      {second}
      {first}
    </div>
  );
};

export default Container;
