import ShopNavbar from './ShopNavbar';
import EnergyDrink from './EnergyDrink';
import Colddrink from './Colddrink';
import Category from './Category';

const Shop = () => {
  return (
    <div className='w-full'>
      <ShopNavbar />
      <Category />
      <EnergyDrink />
      <Colddrink />
    </div>
  )
}

export default Shop