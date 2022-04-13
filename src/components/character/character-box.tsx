import {Card, Avatar} from '@mui/material';
import './character-box.css'

function CharacterBox(){
    return (
        <div>
            <Avatar variant='square'></Avatar>
            <Card>
                <p>name</p>
            </Card>
        </div>
    )
}

export default CharacterBox;