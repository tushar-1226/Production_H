import ShopNavbar from './ShopNavbar';
import Trending from './Trending'
import Category from './Category';
import Banner from './Banner';
import Milkbased from './Milkbased'
import Juice from './Juice';
import Wine from './Wine';

const Shop = () => {
  return (
    <div className='w-full'>
      <ShopNavbar />
      <div className="pt-20">
  <Banner />
</div>
      {/* <Category /> */}
      <Trending />
      <Milkbased/>
      <Juice/>
      <Wine/>
      
    </div>
  )
}

export default Shop