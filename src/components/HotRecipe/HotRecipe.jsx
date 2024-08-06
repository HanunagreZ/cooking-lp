import React from 'react';
import s from './HotRecipe.module.scss';
import chicken from '../../assets/images/hot recipe/chicken.svg';
import recipe_icon from '../../assets/images/icons/recipe_icon.svg';
import clock_icon from '../../assets/images/icons/clock_icon.svg';
import fork_knife_icon from '../../assets/images/icons/fork_knife_icon.svg';
import author_icon from '../../assets/images/icons/john-smith_icon.svg';
import play_circle_icon from '../../assets/images/icons/play_circle_icon.svg';

const HotRecipe = () => {
  return (
    <section className={s.hot_recipe}>
      <div className={s.text_content}>
        <div className={s.category_badge}>
          <img src={recipe_icon} alt="Recipe icon" />
          <p>Hot Recipes</p>
        </div>
        <h1>Spicy delicious chicken wings</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </p>

        <div className={s.recipe_badge}>
          <div className={s.minutes}>
            <img src={clock_icon} alt="Clock icon" />
            <p>30 minutes</p>
          </div>
          <div className={s.chicken}>
            <img src={fork_knife_icon} alt="Fork and knife icon" />
            <p>Chicken</p>
          </div>
        </div>

        <div className={s.more}>
          <div className={s.author}>
            <img src={author_icon} alt="Author icon" />
            <div>
              <h4>John Smith</h4>
              <p>15 March 2024</p>
            </div>
          </div>
          <div className={s.view_recipe}>
            <a href="#">
              View Recipe
              <img src={play_circle_icon} alt="Play circle icon" />
            </a>
          </div>
        </div>
      </div>

      <div className={s.img_content}>
        <img src={chicken} alt="Chicken wings" />
      </div>
    </section>
  );
};

export default HotRecipe;
