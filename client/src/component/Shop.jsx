import ShopNavbar from './ShopNavbar';
import Trending from './Trending'
import Colddrink from './Colddrink';
import Category from './Category';
import Wine from './Wine';
import Banner from './Banner';

const Shop = () => {
  return (
    <div className='w-full'>
      <ShopNavbar />
      <Banner/>
      {/* <Category /> */}
      <Trending />
      
    </div>
  )
}

export default Shop