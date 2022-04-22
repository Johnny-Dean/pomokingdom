import CharacterBox from "../components/character/character_box/character-box";
import Menu from "../components/menu/menu";
import Timer from "../components/timer/timer";
import CharacterEquipment from "../components/character/character_equipment/character_equipment";

function Home(){
    return (
        <div className='container'>
                <CharacterEquipment />
                <Timer />
            <div className="character-menu-container">
                <CharacterBox />
                <Menu />
            </div>
        </div>
    )
}

export default Home;