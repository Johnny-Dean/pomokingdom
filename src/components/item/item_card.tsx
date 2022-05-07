// generalize this for inventory and shop
import { Card, Tooltip, tooltipClasses, Box } from "@mui/material";
import { Item } from "./item_interface";

interface Props {
    item?: Item,
    iconId?: string,
    name?: string
}

enum RarityColors {
    Silver        = 1,
    DarkSeaGreen  = 2,
    DeepSkyBlue   = 3,
    MediumOrchid  = 4,
    Crimson       = 5
}

interface I_IconIds{[index:string]: string}
const IconIds = {
    "Helmet":  "helmet",
    "Sword" :  "sword",
    "Shield":  "shield"
} as I_IconIds

interface I_ItemQuality{[index:string]: string}
const ItemQualityColors = {
    "Bronze" : "DarkGoldenRod",
    "Diamond": "DarkTurquoise",
    "Gold"   : "Gold",
    "Silver" : "Silver"
} as I_ItemQuality

// Way to combine two colors functions?

const generateRarityColor = (itemRarity: number): string => RarityColors[itemRarity]
const generateItemColor = (itemType: string): string => ItemQualityColors[itemType]
const generateIconId = (itemName: string): string => IconIds[itemName]


function ItemCard({item, iconId, name}: Props){
    return (
        // Tool tip can take in a react fragment, which gives us the ability to use things like h3, divs, etc. However had some issues with classes on a span and I dont know if its because this is a little hacky
        <Tooltip title={item 
            ? 
            <>
                <h3 style={{color: `${generateRarityColor(item.rarity)}`}}>{item.name}</h3>
            </>
            : `${name}`}
        followCursor={true}
        >
            <Card className="item-container" sx={{
                border: `${item ? generateRarityColor(item.rarity) : ``} solid 1px`
            }}>
                <span 
                    className={`ra ra-${item ? generateIconId(item.name) : iconId} ra-3x`}
                    style={{
                        color: `${item ? generateItemColor(item.type) : ""}`
                    }} 
                >        
                </span>
            </Card>
        </Tooltip>

    )
}

export default ItemCard;