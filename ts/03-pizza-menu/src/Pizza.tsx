type Props = {
  pizza: PizzaType;
};

export const Pizza = ({ pizza }: Props) => {
  const { name, ingredients, price, photoName, soldOut } = pizza;
  return (
    <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};
