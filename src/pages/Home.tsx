import CharacterBox from "../components/character/character_box/character-box";
import Menu from "../components/menu/menu";
import Timer from "../components/timer/timer";
import CharacterEquipment from "../components/character/character_equipment/character_equipment";
import Tasks from "../components/tasks/tasks";
import { Card } from "@mui/material";
import { animate, AnimationControls, motion, useAnimation } from "framer-motion";
import CharacterSetup from "../components/character/character_initial_setup/character_setup";
import { useCharacterUpdate, useGetCharacter } from "../context/character_provider";
import { useEffect } from "react";
import API from "../services/api-call";
import { Character } from "../components/character/character_interface";

const hideAnimations = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}
interface IAnimation{
    animationControl: AnimationControls
}
function CharacterEquipment_Animated({animationControl}: IAnimation){
    return (
            <motion.div
                animate={animationControl}
                variants={hideAnimations}
            >
                <CharacterEquipment />
            </motion.div>
    )
}
function Tasks_Animated({animationControl}: IAnimation){
    return (
    <motion.div
        animate={animationControl}
        variants={hideAnimations}                    
    >
        <Tasks />
    </motion.div>
    )
}
function RightSideMenu_Animated({animationControl}: IAnimation){
    return (
        <motion.div
            animate={animationControl}
            variants={hideAnimations}
        >
            <div className="character-menu-container">
                <Card 
                sx={{
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
        </motion.div>

    )
}
function Home(){
    const animationControl = useAnimation()
    const updateCharacter = useCharacterUpdate();
    const character = useGetCharacter();

    useEffect(() => {
        API.getCharacter().then((res: Character) => {
            updateCharacter(res)
        })
    }, [])
    
    return (
        // repeating animation control a lot 🤔
        <div className='container'>
            {!character?.char_name && <CharacterSetup /> }
            <CharacterEquipment_Animated animationControl={animationControl} />
            <div className="h-stack">
                    <Timer animationControl={animationControl} />
                    <Tasks_Animated animationControl={animationControl}/>
            </div>
            <RightSideMenu_Animated animationControl={animationControl} />
        </div>

    )
}

export default Home;