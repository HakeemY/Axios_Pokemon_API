const ViewPoke = ({ poke }) => {
  console.log("poke mon show: ", poke);
  return (
    <>
      <h2>Pokemon Lists</h2>
      <ul>
        {poke.map((pkm, i) => {
          return <li key={i}>{pkm}</li>;
        })}
      </ul>
    </>
  );
};

export default ViewPoke;
