import ShopNavbar from './ShopNavbar';
import Trending from './Trending'
import Category from './Category';
import Banner from './Banner';
import Milkbased from './Milkbased'

const Shop = () => {
  return (
    <div className='w-full'>
      <ShopNavbar />
      <Banner/>
      {/* <Category /> */}
      <Trending />
      <Milkbased/>
      
    </div>
  )
}

export default Shop