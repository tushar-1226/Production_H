import ShopNavbar from './ShopNavbar';
import Trending from './Trending'
import Category from './Category';
import Banner from './Banner';
import Milkbased from './Milkbased'
import Juice from './Juice';

const Shop = () => {
  return (
    <div className='w-full'>
      <ShopNavbar />
      <Banner />
      {/* <Category /> */}
      <Trending />
      <Milkbased/>
      <Juice/>
      
    </div>
  )
}

export default Shop