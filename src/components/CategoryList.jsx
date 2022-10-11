import React from 'react'
import { Link } from 'react-router-dom';


const CategoryList = () => {
  return (
    <div className='containerLinkCategory'>
        <Link to={"/categories/Beef"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://imagenes.20minutos.es/files/image_990_v3/uploads/imagenes/2021/08/09/roast-beef.jpeg'/>
                <h4>Beef</h4>
            </div>
        </Link>
        <Link to={"/categories/Chicken"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://www.allrecipes.com/thmb/bQMNaAo68pOUcOlJjEyqpZrPm3w=/2000x1500/smart/filters:no_upscale()/83557-juicy-roast-chicken-mfs495-1-3d0f1e3e54104d43b24d4b480d2839ba.jpg'/>
                <h4>Chicken</h4>
            </div>
        </Link>
        <Link to={"/categories/Dessert"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg'/>
                <h4>Dessert</h4>
            </div>
        </Link>
        <Link to={"/categories/Lamb"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://www.pembrokeshirelamb.co.uk/wp-content/uploads/2019/07/Lamb-Meat-Box-Pembrokeshire-Lamb-600x400.jpg'/>
                <h4>Lamb</h4>
            </div>
        </Link>
        <Link to={"/categories/Miscellaneous"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://us.123rf.com/450wm/fotoaloja/fotoaloja1406/fotoaloja140600009/28801104-composition-with-variety-of-grocery-products-including-meat-and-dairy.jpg?ver=6'/>
                <h4>Miscellaneous</h4>
            </div>
        </Link>
        <Link to={"/categories/Pasta"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2020/09/09/5f58b1bb6d322.r_d.627-418-0.jpeg'/>
                <h4>Pasta</h4>
            </div>
        </Link>
        <Link to={"/categories/Pork"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://img.taste.com.au/DzZTwETU/taste/2019/06/roast-pork-with-crispy-crackling-and-maple-mustard-pears-p50-150224-3.jpg'/>
                <h4>Pork</h4>
            </div>
        </Link>
        <Link to={"/categories/Seafood"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://media-cdn.tripadvisor.com/media/photo-s/18/3a/09/6c/bonefish-seafood-platter.jpg'/>
                <h4>Seafood</h4>
            </div>
        </Link>
        <Link to={"/categories/Side"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://img.taste.com.au/zAi0G-Mm/taste/2016/11/top-50-side-dishes-117781-1.jpeg'/>
                <h4>Side</h4>
            </div>
        </Link>
        <Link to={"/categories/Starter"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://img.taste.com.au/YjTrd97f/taste/2016/11/top-50-starters-117783-1.jpeg'/>
                <h4>Starter</h4>
            </div>
        </Link>
        <Link to={"/categories/Vegan"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Vegan-kebabs-3322e41.jpg'/>
                <h4>Vegan</h4>
            </div>
        </Link>
        <Link to={"/categories/Vegetarian"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/11/16/0/FNK_Chipotle-Inspired-Sofritas-Burrito-Bowl_H2_s4x3.jpg.rend.hgtvcom.441.331.suffix/1605561191398.jpeg'/>
                <h4>Vegetarian</h4>
            </div>
        </Link>
        <Link to={"/categories/Breakfast"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/breakfast-waffles-grits.jpg?quality=82&strip=1'/>
                <h4>Breakfast</h4>
            </div>
        </Link>
        <Link to={"/categories/Goat"}>
            <div className='link-category'>
                <img className='iconCategory' src='https://www.allrecipes.com/thmb/j3QPRBizu7CvZxr_TpGD-9n3yco=/960x960/filters:fill(auto,1)/6944310-1e0259d73182491698f8f6a25f084382.jpg'/>
                <h4>Goat</h4>
            </div>
        </Link>
    </div>
  )
}

export default CategoryList
