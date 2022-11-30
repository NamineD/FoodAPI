import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Recipes from "./Recipes";

const CategoryList = () => {
  const query = useSelector((state) => state.recipeReducer.recipeName);

  const ArrCategory = [
    {
      id: 1,
      category: "Beef",
      img: "https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/08/09/roast-beef.jpeg",
    },
    {
      id: 2,
      category: "Chicken",
      img: "https://www.allrecipes.com/thmb/bQMNaAo68pOUcOlJjEyqpZrPm3w=/2000x1500/smart/filters:no_upscale()/83557-juicy-roast-chicken-mfs495-1-3d0f1e3e54104d43b24d4b480d2839ba.jpg",
    },
    {
      id: 3,
      category: "Dessert",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg",
    },
    {
      id: 4,
      category: "Lamb",
      img: "https://www.pembrokeshirelamb.co.uk/wp-content/uploads/2019/07/Lamb-Meat-Box-Pembrokeshire-Lamb-600x400.jpg",
    },
    {
      id: 5,
      category: "Miscellaneous",
      img: "https://us.123rf.com/450wm/fotoaloja/fotoaloja1406/fotoaloja140600009/28801104-composition-with-variety-of-grocery-products-including-meat-and-dairy.jpg?ver=6",
    },
    {
      id: 6,
      category: "Pasta",
      img: "https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418-0.jpeg",
    },
    {
      id: 7,
      category: "Pork",
      img: "https://img.taste.com.au/DzZTwETU/taste/2019/06/roast-pork-with-crispy-crackling-and-maple-mustard-pears-p50-150224-3.jpg",
    },
    {
      id: 8,
      category: "Seafood",
      img: "https://media-cdn.tripadvisor.com/media/photo-s/18/3a/09/6c/bonefish-seafood-platter.jpg",
    },
    {
      id: 9,
      category: "Side",
      img: "https://img.taste.com.au/zAi0G-Mm/taste/2016/11/top-50-side-dishes-117781-1.jpeg",
    },
    {
      id: 10,
      category: "Starter",
      img: "https://img.taste.com.au/YjTrd97f/taste/2016/11/top-50-starters-117783-1.jpeg",
    },
    {
      id: 11,
      category: "Vegan",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Vegan-kebabs-3322e41.jpg",
    },
    {
      id: 12,
      category: "Vegetarian",
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/11/16/0/FNK_Chipotle-Inspired-Sofritas-Burrito-Bowl_H2_s4x3.jpg.rend.hgtvcom.441.331.suffix/1605561191398.jpeg",
    },
    {
      id: 13,
      category: "Breakfast",
      img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/breakfast-waffles-grits.jpg?quality=82&strip=1",
    },
    {
      id: 14,
      category: "Goat",
      img: "https://www.allrecipes.com/thmb/j3QPRBizu7CvZxr_TpGD-9n3yco=/960x960/filters:fill(auto,1)/6944310-1e0259d73182491698f8f6a25f084382.jpg",
    },
  ];

  return (
    <>
      {query.length > 1 ? (
        <Recipes query={query} />
      ) : (
        <div className="containerLinkCategory">
          {ArrCategory.map((category) => (
            <Link to={`/categories/${category.category}`}>
              <div className="link-category" key={category.id}>
                <img className="iconCategory" src={category.img} />
                <h4>{category.category}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default CategoryList;
