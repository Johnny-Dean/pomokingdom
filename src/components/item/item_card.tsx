// generalize this for inventory and shop
import { Card, Tooltip, tooltipClasses } from "@mui/material";

interface Props {
    name?: string, 
    iconId?: string,
    stats?: object
}


function ItemCard({name, iconId}: Props){
    return (
        <Tooltip title={`
            ${name}
        `} followCursor={true}>
            <Card className="item-container">
                <i className={`ra ra-${iconId} ra-3x`}></i> 
            </Card>
        </Tooltip>

    )
}

export default ItemCard;