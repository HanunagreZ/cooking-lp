import s from './Home.module.scss';
import HotRecipe from '../../components/HotRecipe/HotRecipe';
import Categories from '../../components/Categories/Categories';
import Recipes from '../../components/Recipes/Recipes';
import Chef from '../../components/Chef/Chef';

const Home = () => {
  return (
    <>
      <div className={s.container}>
        {/* <HotRecipe />
        <Categories />
        <Recipes /> */}
        <Chef />
      </div>
    </>
  );
};

export default Home;
