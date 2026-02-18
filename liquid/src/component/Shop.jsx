import ShopNavbar from './ShopNavbar';
import EnergyDrink from './EnergyDrink';
import Colddrink from './Colddrink';
import Category from './Category';
import Wine from './Wine';

const Shop = () => {
  return (
    <div className='w-full'>
      <ShopNavbar />
      <Category />
      <EnergyDrink />
      <Colddrink />
      <Wine/>
    </div>
  )
}

export default Shop