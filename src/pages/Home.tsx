import CharacterBox from "../components/character/character_box/character-box";
import Menu from "../components/menu/menu";
import Timer from "../components/timer/timer";
import CharacterEquipment from "../components/character/character_equipment/character_equipment";
import Tasks from "../components/tasks/tasks";

function Home(){
    return (
        <div className='container'>
                <CharacterEquipment />
                <div className="h-stack">
                    <Timer />
                    <Tasks />
                </div>
            <div className="character-menu-container">
                <CharacterBox />
                <Menu />
            </div>
        </div>
    )
}

export default Home;