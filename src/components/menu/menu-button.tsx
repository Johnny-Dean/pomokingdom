import 'rpg-awesome/css/rpg-awesome.css';
interface MenuButtonProps {
    iconId: string,
    onClick?: () => void;
}

function MenuButton({iconId, onClick}: MenuButtonProps){
    return (
        <button onClick={onClick}>
            <i className={`ra ra-${iconId} ra-2x`}></i> 
        </button>
    )
}

export default MenuButton;