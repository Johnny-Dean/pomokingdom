import {Card, Avatar} from '@mui/material';
import './character-box.css'
import { useCharacter } from '../../context/character_provider';

function CharacterBox(){
    const character = useCharacter();
    
    return (
        <div>
            <Avatar variant='square'></Avatar>
            <Card>
                <p>{character?.char_name}</p>
                <p>{character?.stats?.gold}</p>
            </Card>
        </div>
    )
}

export default CharacterBox;