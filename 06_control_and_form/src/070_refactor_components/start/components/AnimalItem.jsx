export const AnimalItem = ({ animal }) => {
  return (
    <li>
      {animal}
      {animal === "Dog" && "★"}
    </li>
  );
}
