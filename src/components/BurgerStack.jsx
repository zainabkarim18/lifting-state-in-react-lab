import Ingredient from './Ingredient';

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <div>
      <ul>
        {stack.length === 0 ? (
          <li>No Ingredients</li>
        ) : (
          stack.map((ingredient) => (
            <Ingredient 
              key={ingredient.name}
              ingredient={ingredient}
              onButtonClick={onRemove}
              buttonText="X"
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default BurgerStack;
