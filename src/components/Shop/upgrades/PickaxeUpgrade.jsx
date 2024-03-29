// components/Shop/upgrades/PickaxeUpgrade.jsx
import ShopButton from '../buttons/ShopButton';
import '../Shop.css';

function PickaxeUpgrade({ handleUpgrade, shopToggle, pickaxe, drill }) {
  return (
    <div className='upgrade-tab'>
      {drill.isBought ? (<h3>Drill</h3>) : (<h3>Pickaxe</h3>)}
      <ShopButton onClick={() => handleUpgrade(pickaxe.power_cost, 'power')} 
                  cost={pickaxe.power_cost} label="Power +1" 
                  shopToggle={shopToggle} />
                  
      <ShopButton onClick={() => handleUpgrade(pickaxe.multi_cost, 'multistrike')} 
                  cost={pickaxe.multi_cost} label="Multistrike +1"
                  shopToggle={shopToggle} />

      {drill.isBought ? 
      (
        <>
        <ShopButton onClick={() => handleUpgrade(drill.coolant_cost, 'coolant')} 
                    cost={drill.coolant_cost} label="Coolant +25%" 
                    shopToggle={shopToggle} />

        <ShopButton onClick={() => handleUpgrade(drill.heat_cap_cost, 'heat_cap')}
                    cost={drill.heat_cap_cost} label="Heat capacity +10" 
                    shopToggle={shopToggle} />
        </>

      ) : (<ShopButton onClick={() => handleUpgrade(drill.drill_cost, 'drill')} 
                       cost={drill.drill_cost} label="Upgrade to drill"
                       shopToggle={shopToggle} />)}
    </div>
  );
}

export default PickaxeUpgrade;