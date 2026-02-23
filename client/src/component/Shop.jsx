import ShopNavbar from './ShopNavbar';
import EnergyDrink from './EnergyDrink';
import Colddrink from './Colddrink';
import Category from './Category';
import Wine from './Wine';
import Banner from './Banner';

const Shop = () => {
  return (
    <div className='w-full'>
      <ShopNavbar />
      <Banner/>
      <Category />
      <EnergyDrink />
      
    </div>
  )
}

export default Shop