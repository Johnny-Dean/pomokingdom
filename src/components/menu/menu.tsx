import { Card } from '@mui/material';
import FriendsListMenuButton from '../friends/friends-menu-button';
import InventoryMenuButton from '../inventory/inventory-menu-button';
import SettingsMenuButton from '../settings/settings-menu-button';

function Menu(){
    return (
        <Card>
            <FriendsListMenuButton />
            <SettingsMenuButton />
            <InventoryMenuButton />
        </Card>
    )
}

export default Menu;