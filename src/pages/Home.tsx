import CharacterBox from "../components/character/character_box/character-box";
import Menu from "../components/menu/menu";
import Timer from "../components/timer/timer";
import CharacterEquipment from "../components/character/character_equipment/character_equipment";
import Tasks from "../components/tasks/tasks";
import { Card } from "@mui/material";
import { animate, motion, useAnimation } from "framer-motion";

const hideAnimations = {
    visible: {opacity: 1},
    hidden: {opacity: 0}
}


function Home(){
    const animationControl = useAnimation()

    return (
        <div className='container'>
            <motion.div
                animate={animationControl}
                variants={hideAnimations}
            >
                <CharacterEquipment />
            </motion.div>
                <div className="h-stack">
                    <Timer animationControl={animationControl} />
                    <motion.div
                            animate={animationControl}
                            variants={hideAnimations}                    
                    >
                        <Tasks />
                    </motion.div>
                </div>
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

        </div>

    )
}

export default Home;