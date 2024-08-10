import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, onAdd }) => {
 return (
  <div>
   <ul>
    {ingredients.map((ingredient) => (
          <Ingredient 
            key={ingredient.name}
            ingredient={ingredient}
            onButtonClick={onAdd}
            buttonText="+"
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
