import {Card, Avatar, Box} from '@mui/material';
import './character-box.css'
import { useGetCharacter, useCharacterUpdate } from '../../../context/character_provider';
import { useEffect } from 'react';
import API from '../../../services/api-call';
import { Character } from '../character_interface';
import CharacterSetup from '../character_initial_setup/character_setup';

function CharacterBox(){
    const character = useGetCharacter();

    return (
        <>
            <Box sx= {{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <Avatar variant='square' /> 
                <div>
                    <p>{character?.char_name}</p>
                    <p>{character?.stats?.gold}</p>
                </div>
            </Box>
        </>

    )
}

export default CharacterBox;