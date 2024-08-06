import s from './Categories.module.scss';
import breakfast from '../../assets/images/categories/breakfast.svg';
import vegan from '../../assets/images/categories/vegan.svg';
import meat from '../../assets/images/categories/meat.svg';
import dessert from '../../assets/images/categories/dessert.svg';
import lunch from '../../assets/images/categories/lunch.svg';
import chocolate from '../../assets/images/categories/chocolate.svg';

const food_positions = [
  {
    id: 1,
    img: breakfast,
    title: 'Breakfast',
    gradient_color: 'rgba(112,130,70,0.6502976190476191) 0%',
  },
  {
    id: 2,
    img: vegan,
    title: 'Vegan',
    gradient_color: 'rgba(108,198,63,0.5970763305322129) 0%',
  },
  {
    id: 3,
    img: meat,
    title: 'Meat',
    gradient_color: 'rgba(204,38,27,0.5998774509803921) 0%',
  },
  {
    id: 4,
    img: dessert,
    title: 'Dessert',
    gradient_color: 'rgba(240,158,0,0.5970763305322129) 0%',
  },
  {
    id: 5,
    img: lunch,
    title: 'Lunch',
    gradient_color: 'rgba(0,0,0,0.5970763305322129) 0%',
  },
  {
    id: 6,
    img: chocolate,
    title: 'Chocolate',
    gradient_color: 'rgba(143,131,131,0.5970763305322129) 0%',
  },
];

const Categories = () => {
  return (
    <section>
      <div className={s.container}>
        <div className={s.title}>
          <h2>Categories</h2>
          <a href="#">View all categories</a>
        </div>

        <div className={s.food}>
          {food_positions.map((item) => (
            <div
              className={s.food_position}
              style={{
                background: `linear-gradient(0deg, ${item.gradient_color}, rgba(255,255,255,1) 60%)`,
              }}
            >
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
