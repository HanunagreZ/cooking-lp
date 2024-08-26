import s from './Recipes.module.scss';
import clock_icon from '../../assets/images/icons/clock_icon.svg';
import fork_knife_icon from '../../assets/images/icons/fork_knife_icon.svg';
import beef_cheeseburger from '../../assets/images/recipes/beef_cheeseburger.svg';
import bacon_pasta from '../../assets/images/recipes/bacon_pasta.svg';
import chicken_and_rice from '../../assets/images/recipes/chicken_and_rice.svg';
import chicken_meatballs from '../../assets/images/recipes/chicken_meatballs.svg';
import fruity_pancake from '../../assets/images/recipes/fruity_pancake.svg';
import mayonnaise_salad from '../../assets/images/recipes/mayonnaise_salad.svg';
import oatmeal_pancake from '../../assets/images/recipes/oatmeal_pancake.svg';
import roasted_salmon from '../../assets/images/recipes/roasted_salmon.svg';

const Recipes = () => {
  const recipe_positions = [
    {
      id: 1,
      img: beef_cheeseburger,
      title: 'Big and Juicy Wagyu Beef Cheeseburger',
      minutes: '30 Minutes',
      badge_text: 'Snack',
    },
    {
      id: 2,
      img: roasted_salmon,
      title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
      minutes: '30 minutes',
      badge_text: 'Fish',
    },
    {
      id: 3,
      img: oatmeal_pancake,
      title: 'Strawberry Oatmeal Pancake with Honey Syrup',
      minutes: '30 minutes',
      badge_text: 'Breakfast',
    },
    {
      id: 4,
      img: mayonnaise_salad,
      title: 'Fresh and Healthy Mixed Mayonnaise Salad',
      minutes: '30 minutes',
      badge_text: 'Healthy',
    },
    {
      id: 5,
      img: fruity_pancake,
      title: 'Fruity Pancake with Orange & Blueberry',
      minutes: '30 minutes',
      badge_text: 'Sweet',
    },
    {
      id: 6,
      img: chicken_meatballs,
      title: 'Chicken Meatballs with Cream Cheese',
      minutes: '30 minutes',
      badge_text: 'Meat',
    },
    {
      id: 7,
      img: chicken_and_rice,
      title: 'The Best Easy One Pot Chicken and Rice',
      minutes: '30 minutes',
      badge_text: 'Snack',
    },
    {
      id: 8,
      img: bacon_pasta,
      title: 'The Creamiest Creamy Chicken and Bacon Pasta',
      minutes: '30 minutes',
      badge_text: 'Noodles',
    },
  ];

  return (
    <section>
      <div className={s.container}>
        <div className={s.title}>
          <h2>Simple and tasty recipes</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>
        </div>

        <div className={s.recipes}>
          {recipe_positions.map((item) => (
            <div className={s.recipe} key={item.id}>
              <img src={item.img} alt={item.title} className={s.recipeImg} />
              <h3>{item.title}</h3>
              <div className={s.recipe_badge}>
                <div className={s.minutes}>
                  <img src={clock_icon} alt="Clock icon" />
                  <p>{item.minutes}</p>
                </div>
                <div className={s.chicken}>
                  <img src={fork_knife_icon} alt="Fork and knife icon" />
                  <p>{item.badge_text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipes;
