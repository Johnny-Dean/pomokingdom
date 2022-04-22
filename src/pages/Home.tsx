import CharacterBox from "../components/character/character-box";
import Menu from "../components/menu/menu";
import Timer from "../components/timer/timer";
import CharacterEquipment from "../components/character/character_equipment/character_equipment";
import { useEffect } from "react";
import { getCharacter } from "../services/api-call";
import { useCharacterUpdate } from "../context/character_provider";

function Home(){
    const updateCharacter = useCharacterUpdate();

    useEffect(() => {
        getCharacter().then(res => {
            updateCharacter(res);
        })
    }, [])

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