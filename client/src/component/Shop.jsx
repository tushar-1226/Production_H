import ShopNavbar from './ShopNavbar';
import Trending from './Trending'
import Category from './Category';
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