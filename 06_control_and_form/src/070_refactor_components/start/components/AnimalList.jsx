import { AnimalItem } from "./AnimalItem";

export const AnimalList = ({ animals }) => {
  if (animals.length === 0) {
    return <h3>アニマルがない</h3>
  }
  console.log(<AnimalList />);
  return (
    <ul>
      {animals.map((animal) => (
        <AnimalItem animal={animal} key={animal} />
      ))}
    </ul>
  );
};
