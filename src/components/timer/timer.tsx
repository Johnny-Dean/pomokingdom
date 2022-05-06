import { useEffect, useState } from "react";
import convSecondsToFancyTime from "../../services/seconds-conversion";
import TimerButtons from "./timer-buttons";
import TimerState from "./timerstate";
import './timer.css'
import { Box, Button } from "@mui/material";
import { AnimationControls } from "framer-motion";

interface Props{
    animationControl: AnimationControls
}

function Timer({animationControl}: Props){
    const [timerRunning, setTimerRunning] = useState<boolean>(false);
    const [currTimerState, setTimerState] = useState<TimerState>(TimerState.STUDY)
    const [seconds, setSeconds] = useState<number>(currTimerState)

    const handleClick = (): void => {
        if(currTimerState === TimerState.STUDY) animationControl.start("hidden")
        if(timerRunning) animationControl.start("visible")
        setTimerRunning(!timerRunning);
    }

    const handleTimerStateChange = (newTimerState: TimerState): void => {
        animationControl.start("visible")
        setTimerState(newTimerState);
        setSeconds(newTimerState);
        setTimerRunning(false);
    }
    
    useEffect(() => {
        let timeInterval: number | undefined;
        if (timerRunning){
            timeInterval = window.setInterval(() => setSeconds(seconds - 1), 1000);
        } else if (!timerRunning && seconds > 0) {
            clearInterval(timeInterval);
        }
        return () => clearInterval(timeInterval);
    }, [timerRunning, seconds])
    
    return (
        <Box 
        className="timer-container" 
        sx={{
            boxShadow: 1
        }} 
        >
            <span className="timer-text">{convSecondsToFancyTime(seconds)}</span>
            <TimerButtons newTimerState={handleTimerStateChange} currTimerState={currTimerState}/>
            <Button className='Button' variant='contained' onClick={handleClick}>{timerRunning?'Stop':'Start'}</Button>
        </Box>
    )
} 
export default Timer;
