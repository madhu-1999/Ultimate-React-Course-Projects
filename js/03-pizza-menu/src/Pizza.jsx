import "./index.css";
export const Pizza = ({ pizza }) => {
  console.log(pizza);
  const { name, ingredients, price, photoName, soldOut } = pizza;
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};
