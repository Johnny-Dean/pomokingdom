import { Button, ClickAwayListener, Dialog, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

import base from "../../../Art/Base/human_m_upscaled.png"
import hair from "../../../Art/Head/short_white_upscaled.png"

function SpriteGenerator(){
    
}

function CharacterSetup(){
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <> 
            <Dialog
                open={open}
            >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: "4em"
                    }}>
                        <Typography>Welcome to PomoKingdom</Typography>
                        <Input placeholder="Character Name"></Input>
                        <Button onClick={handleClose} variant="contained">Submit</Button>
                        <img src={hair} />
                        <img src={base} />
                    </Box>
            </Dialog>

        </>
    )
}

export default CharacterSetup;

