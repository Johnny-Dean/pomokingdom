import CharacterBox from "../components/character/character_box/character-box";
import Menu from "../components/menu/menu";
import Timer from "../components/timer/timer";
import CharacterEquipment from "../components/character/character_equipment/character_equipment";
import Tasks from "../components/tasks/tasks";
import { Card } from "@mui/material";

function Home(){
    return (
        <div className='container'>
                <CharacterEquipment />
                <div className="h-stack">
                    <Timer />
                    <Tasks />
                </div>
            <div className="character-menu-container">
                <Card sx={{
                    zIndex: 1,
                    position: "absolute",
                    bottom: 460,
                    padding: "0 1em"
                }}>
                    <CharacterBox />
                </Card>
                <Card sx={{
                    padding: "1em"
                }}>
                    <Menu />
                </Card>

            </div>
        </div>
    )
}

export default Home;