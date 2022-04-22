import {Card, Avatar} from '@mui/material';
import './character-box.css'
import { useGetCharacter, useCharacterUpdate } from '../../../context/character_provider';
import { useEffect } from 'react';
import API from '../../../services/api-call';
import { Character } from '../character_interface';

function CharacterBox(){
    const character = useGetCharacter();
    const updateCharacter = useCharacterUpdate();

    useEffect(() => {
        API.getCharacter().then((res: Character) => {
            updateCharacter(res);
        })
    }, [updateCharacter])
    
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