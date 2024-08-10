const Ingredient = ({ ingredient, onButtonClick, buttonText }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={() => onButtonClick(ingredient)}>{buttonText}</button>
    </li>
  );
};

export default Ingredient;
