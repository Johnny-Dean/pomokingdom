import { ClickAwayListener, Dialog } from "@mui/material";
import { useState } from "react";

function CharacterSetup(){
    return (
        <h1>Hello</h1>
    )
}

function CharacterSetupModal(){
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    return (
        <> 
        <Dialog
            open={open}
        >
            <ClickAwayListener onClickAway={handleClose}>
                <div>
                    <CharacterSetup />
                </div>
            </ClickAwayListener>
        </Dialog>
    </>
    )
}

export default CharacterSetupModal;