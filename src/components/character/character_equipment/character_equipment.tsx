import {Card} from '@mui/material';
import 'rpg-awesome/css/rpg-awesome.css';
import './character_equipment.css';
import ItemCard from '../../item/item_card';
import { Item } from '../../item/item_interface';

interface I_CharacterEquipped {
    "Head"       ?: Item,
    "Chest"      ?: Item,
    "Right Hand" ?: Item,
    "Boots"      ?: Item,
    "Amulet"     ?: Item,
    "Ring One"   ?: Item,
    "Ring Two"   ?: Item
}   

function CharacterEquipment(){
    
    return (
        <Card className='loadout-container'
            sx={{
                backgroundColor: "rgba(249, 249, 249, 0.4)",
                boxShadow: 1    
            }}
        >
            {/* equipped[0] */}
            <ItemCard name="Head" iconId="helmet" />

            <div className="item-row-container">
                <ItemCard />
                {/* [1, 2] */}
                <ItemCard name="Chest" iconId="vest" />
                <ItemCard name="Right Hand" iconId="sword" />
            </div>
            {/* [3] */}
            <ItemCard name="Boots" iconId="boot-stomp" />
            <div className="item-row-container">
                {/* [4, 5, 6] */}
                <ItemCard name="Amulet" iconId="crowned-heart" />
                <ItemCard name="Ring" iconId="fire-ring" />
                <ItemCard name="Ring" iconId="fire-ring" />
            </div>
        </Card>
    )
}

export default CharacterEquipment;