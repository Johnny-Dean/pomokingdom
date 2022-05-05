import {Card} from '@mui/material';
import 'rpg-awesome/css/rpg-awesome.css';
import './character_equipment.css';
import ItemCard from '../../item/item_card';

function CharacterEquipment(){
    return (
        <Card className='loadout-container'
            sx={{
                backgroundColor: "rgba(249, 249, 249, 0.4)",
                boxShadow: 1    
            }}
        >
            <ItemCard name="Head" iconId="helmet" />

            <div className="item-row-container">
                <ItemCard />
                <ItemCard name="Chest" iconId="vest" />
                <ItemCard name="Right Hand" iconId="sword" />
            </div>
            
            <ItemCard name="Boots" iconId="boot-stomp" />
            <div className="item-row-container">
                <ItemCard name="Amulet" iconId="crowned-heart" />
                <ItemCard name="Ring" iconId="fire-ring" />
                <ItemCard name="Ring" iconId="fire-ring" />
            </div>
        </Card>
    )
}

export default CharacterEquipment;