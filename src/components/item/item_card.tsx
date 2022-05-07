// generalize this for inventory and shop
import { Card, Tooltip, tooltipClasses, Box } from "@mui/material";
import { Item } from "./item_interface";

interface Props {
    item?: Item,
    iconId?: string,
    name?: string
}

enum ItemColors{
    SILVER = 1,
    DarkSeaGreen  = 2,
    DeepSkyBlue  = 3,
    MediumOrchid  = 4,
    Crimson  = 5
}

function generateColor(itemRarity: number): string{
    return ItemColors[itemRarity]
}

function ItemCard({item, iconId, name}: Props){
    return (
        <Tooltip title={item 
            ? 
            <>
                <h3 style={{color: `${generateColor(item.rarity)}`}}>{item.name}</h3>
            </>
            : `${name}`}
        followCursor={true}>
            <Card className="item-container">
                <i className={`ra ra-${iconId} ra-3x`}></i> 
            </Card>
        </Tooltip>

    )
}

export default ItemCard;