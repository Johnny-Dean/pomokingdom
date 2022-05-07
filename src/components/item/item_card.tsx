// generalize this for inventory and shop
import { Card, Tooltip, tooltipClasses, Box } from "@mui/material";
import { Item } from "./item_interface";

interface Props {
    item?: Item,
    iconId?: string,
    name?: string
}

enum RarityColors{
    Silver        = 1,
    DarkSeaGreen  = 2,
    DeepSkyBlue   = 3,
    MediumOrchid  = 4,
    Crimson       = 5
}

interface I_IconIds{
    [index:string]: string
}

let IconIds = {
    "Helmet":  "helmet",
    "Sword" :  "sword",
    "Shield":  "shield"
} as I_IconIds

function generateColor(itemRarity: number): string{
    return RarityColors[itemRarity]
}

function generateIconId(itemType: string): string {
    console.log(IconIds[itemType])
    return IconIds[itemType]
}

function ItemCard({item, iconId, name}: Props){
    return (
        // Tool tip can take in a react fragment, which gives us the ability to use things like h3, divs, etc. However had some issues with classes on a span and I dont know if its because this is a little hacky
        <Tooltip title={item 
            ? 
            <>
                <h3 style={{color: `${generateColor(item.rarity)}`}}>{item.name}</h3>
            </>
            : `${name}`}
        followCursor={true}
        >
            {/* ra ra-${iconId} ra-3x */}
            <Card className="item-container">
                <i className={`ra ra-${item ? generateIconId(item.name) : iconId} ra-3x`}></i>
            </Card>
        </Tooltip>

    )
}

export default ItemCard;