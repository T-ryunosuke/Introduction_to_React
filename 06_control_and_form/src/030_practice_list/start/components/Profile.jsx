const Profile = ({ name, age, hobbies }) => {
  const hobbiesList = hobbies.map((hobby) => (
    <li key={hobby}>{hobby}</li>
  ));
  return (
    <div>
      <hr />
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>
        <div>Hobby:</div>
        <ul>{hobbiesList}</ul>
      </div>
    </div>
  );
};

export default Profile;
