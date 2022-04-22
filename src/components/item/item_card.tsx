// generalize this for inventory and shop
import { Card } from "@mui/material";

interface Props {
    name?: string, 
    iconId?: string
}

function ItemCard({name, iconId}: Props){
    return (
        <Card className="item-container">
            <i className={`ra ra-${iconId} ra-3x`}></i> 
        </Card>
    )
}

export default ItemCard;