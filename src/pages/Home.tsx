import Loadout from "../components/character-equip/character-loadout";
import CharacterBox from "../components/character/character-box";
import Menu from "../components/menu/menu";
import Timer from "../components/timer/timer";

function Home(){
    return (
        <div className='container'>
                <Loadout />
                <Timer />
            <div className="character-menu-container">
                <CharacterBox />
                <Menu />
            </div>
        </div>
    )
}

export default Home;